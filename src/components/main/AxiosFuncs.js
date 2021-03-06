import axios from 'axios'
import { observer, inject } from 'mobx-react';
// @inject("store")
// @observer 
class AxiosFuncClass {
  
  getRequests(link) {
    return axios.get(`/${link}`)
      .then(result => {
        console.log(result);
      })
      .catch(function (error) {
        console.log("Sorry, something wrong. Get request failed", error);
      });

  }

  deleteRequests(link, id) {
    //link = "record";
    //id = 15;
    console.log(link, id);
    return axios.delete(`/delete/${link}/${id}`)
      .then(result => {
        console.log("success", result);
      })
      .catch(function (error) {
        console.log("Sorry, something wrong. delete request failed", error);
      });
  }

  putRequests(link, data) {
    return axios.put(`/${link}`, data, {
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(response => {
      console.log("DB Updated", response);
    }).catch(function (error) {
      console.log(error);
    });
  }

  postRequests(link, data) {
    // let data = {name:"business", type:0, Icon:"faGlobe"};
    return axios.post(`/${link}`, data, {
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(response => {
      console.log("successful post-request", response);
    }).catch(function (error) {
      console.log("Sorry, something wrong. New data hasn't been added.", error);
    });
  }

  //------ Functions to use externally

  getDataFromDB() {
    console.log('aaa')
    let userId = 1;//this.props.id;
    return axios.get(`/getData/${userId}`)
  }

  getCategoriesFromDB() {
    //return this.getRequests("categories");
    return axios.get(`/categories`)
  }

  addCategory = () => {
    this.postRequests("category", { name: "business", type: 0, Icon: "faGlobe" });
  }
  addRecord = (newRecord) => {
     /* newRecord: { userId: 1, date: "2018-08-30",type: 1,categoryId: 1,paymentMethod: 0,amount: 100,currency: 'USD',comment: "nice"}*/
    let userId = 1;
    newRecord.userId = 1;
    return this.postRequests("record", newRecord);
  }

  deleteRecord = (id) => {
    //let id = 10;
    return this.deleteRequests("record", id);
  }
  deleteCategory = () => {
    let id = 8;
    this.deleteRequests("category", id);
  }
  editCategories = () => {
    this.putRequests("category", { id: 13, name: "sport", type: 0, Icon: "faSport" });
  }
  editRecord = (newRecord) => {
    let userId = 1;
    newRecord.userId = 1;
    return this.putRequests("record",newRecord);
  }
}

const AxiosFuncs = new AxiosFuncClass();
export default AxiosFuncs;


