import axios from 'axios';

const ANDROID_API_BASE_URL= "http://localhost:8081/api";
class AndroidServices{

    getAndroids(){
       return axios.get(ANDROID_API_BASE_URL+"/allandroids");
    }

    createAndroidModel(AndroidModel){
        return axios.post(ANDROID_API_BASE_URL+"/addandroid",AndroidModel);
    }

    getAndroidsById(id){
        return axios.get(ANDROID_API_BASE_URL+"/android/id/"+id);
    }

    updateAndroid(AndroidModel,id){
        return axios.put(ANDROID_API_BASE_URL+"/android/"+id,AndroidModel);
    }

    deleteAndroid(id){
        return axios.delete(ANDROID_API_BASE_URL+"/android/"+id);
    }

}

export default new AndroidServices();