import { getAllDocuments, getAllNewDocuments,  } from "@/components/utils/firebase.utils"

const getSubmissions = async () => {
    return getAllDocuments()
}

const getNewSubmissions = async () => {
    return getAllNewDocuments()
}

export { getSubmissions, getNewSubmissions };