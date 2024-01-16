import conf from "../conf/conf";
import {Client,ID,Databases,Storage,Query} from "appwrite"

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client)
    }

    async createPost({title,slug,content,featruedImage,status,userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featruedImage,
                    status,
                    userId,
                }
                
                )
            
        } catch (error) {
            console.log("Appwrite Service :: createPost :: error", error)
        }
    }

    async updatePost(slug,{title,content,featruedImage,status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featruedImage,
                    status,
                }
            )
            
        } catch (error) {
            console.log("Appwrite :: updatePost :: error" , error);
        }
    }

    async deletePost({slug}){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
            
        } catch (error) {
            console.log("Appwrite Service :: deletePost :: error", error);
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                console.log(conf.appwriteDatabaseId)
            )
            
        } catch (error) {
            console.log("Appwrite service :: getPost :: error" , error);
        }
    }

    async getPosts(queries = [Query.equal("Status","active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            )
            
        } catch (error) {
            console.log("Appwrite Service :: getPosts :: error", error);
            return false
        }
    }

    // file upload service 

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
            
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error" , error);
            return false

        }

    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
            
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error);
            return false
        }
    }

    getfilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )

    }
    

}
const service  =new Service()
export default service;

