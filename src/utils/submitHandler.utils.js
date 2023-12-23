
import { v4 as uuidv4 } from "uuid";
import { updateDb, uploadFile, getDownloadUrlPath } from "./firebase.utils";

const updateCollection = async (docId, obj) => {
    await updateDb(docId, obj);
}

// const uploadFilesToCloudinary = async (files, folder_name, upload_preset) => {
//     const URL = process.env.NEXT_PUBLIC_CLOUDINARY_URL

//     if (files?.length) {
//         const allDataObj = await Promise.all(files.map(async (file) => {
//             const fileUpload = new FormData();
//             fileUpload.append('file', file);
//             fileUpload.append('folder', folder_name);
//             fileUpload.append('upload_preset', upload_preset);
//             //upload each file to cloudinary (cloudinary one file contsraint)
//             try {
//                 const data = await fetch(`${URL}`, {
//                     method: 'POST',
//                     body: fileUpload
//                 })
//                     .then(res => res.json())
//                 return data;
//             } catch (error) {
//                 console.log("Error uploading files: ", error);
//             }

//         }))
//         return allDataObj.map(obj => ({ url: obj.url, name: `${obj.original_filename}${Object.hasOwn(obj, "format") ? "." + obj.format : ""}` }));
//     }
//     else return [];
// }

//upload files to firebase

const uploadFilesToFirebase = async (files, uid) => {
    return await Promise.all(files.map(async file => {
        const url = await uploadFile(file, uid);

        return {name:file.name, url, new: true}
    }))
}

const submitHandler = async (files, formValues) => {
    try {
        const uid = uuidv4();
        let firestoreData = { ...formValues, uid, nuevo: true, };
        const fileUrls = await uploadFilesToFirebase(files, firestoreData.uid);
        
        firestoreData = { ...firestoreData, files: [...fileUrls] };
        //unique document name
        const docId = formValues.nombre + "-" + firestoreData.uid

        await updateCollection(docId, firestoreData);
        return true;
    } catch (err) {
        console.log(err)
        return false;
    }
}

export default submitHandler;