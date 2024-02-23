import { commonAPI } from "./commonAPI";
import { baseURL } from "./baseURL";

//1 register user
export const registerAPI=async(user)=>{
    return await commonAPI("post",`${baseURL}/user/register`,user,"")
}
//2 login user

export const loginAPI=async(reqBody)=>{
    return await commonAPI("post",`${baseURL}/user/login`,reqBody,"")
}

//3add project
export const addProjectAPI=async(reqBody,reqHeader)=>{
    return await commonAPI('post',`${baseURL}/project/add`,reqBody,reqHeader)
}

//4 get home project 
export const homePorjectAPI=async()=>{
    return await commonAPI('get',`${baseURL}/project/home-project`,"","")
}
// get all project
//searchKey is passed as query parameter
//path?key=value
export const allProjectAPI=async(searchKey,reqHeader)=>{
    return await commonAPI('get',`${baseURL}/project/all-project?search=${searchKey}`,"",reqHeader)
}

//getuserProject
export const userProjectAPI=async(reqHeader)=>{
    return await commonAPI('get',`${baseURL}/project/user-project`,"",reqHeader)
}
//update user project 
export const editUserProjectAPI=async(id,reqBody,reqHeader)=>{
    return await commonAPI('put',`${baseURL}/projet/edit/${id}`,reqBody,reqBody)
}
