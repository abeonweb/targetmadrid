
import { v4 as uuidv4 } from "uuid";
import { updateDb } from "./firebase.utils";

const updateCollection = async (docId, obj) =>{
    await updateDb(docId, obj);
}

const uploadFilesToCloudinary = async (files, folder_name, upload_preset)=>{
    const URL = process.env.NEXT_PUBLIC_CLOUDINARY_URL
    
    if (files?.length) {
        const allDataObj = await Promise.all(files.map(async (file) => {
            const fileUpload = new FormData();
            fileUpload.append('file', file);
            fileUpload.append('folder', folder_name);
            fileUpload.append('upload_preset', upload_preset);
            //upload each file to cloudinary (cloudinary one file contsraint)
            try {
                const data = await fetch(`${URL}`, {
                    method: 'POST',
                    body: fileUpload
                })
                .then(res => res.json())
                return data;
            } catch (error) {
                console.log("Error uploading files: ", error);
            }
    
        }))
        return allDataObj.map(obj => ({url:obj.url, name:`${obj.original_filename}${Object.hasOwn(obj,"format")? "."+obj.format:""}`}));
    }
    else return [];
}

const submitHandler = async (files, formData) => {
    const uid = uuidv4()
    let firestoreData = { ...formData, uid, nuevo: true,};
    const fileUrls = await uploadFilesToCloudinary(files, uid, 'targetfiles');
    firestoreData = { ...firestoreData,  files: [...fileUrls] };
    //unique document name
    const docId = formData.nombre + "-" + uid
    
    await updateCollection(docId, firestoreData);


}

export default submitHandler;