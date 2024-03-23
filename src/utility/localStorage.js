/* 
1.get existing array and convert it to a object
2.push new data to existing array
3.and finally save array of data in string format in a local storage
*/
// 1
const getStoredApplications = () =>{
    const storeApplications = localStorage.getItem('job-applications');
    return storeApplications ?JSON.parse(storeApplications) : [];
    // if(storeApplications){
    //     return JSON.parse(storeApplications);
    // }
    // else{
    //     return [];
    // }
}

// 2
const saveApplication = id => {
    const storedJobApplications = getStoredApplications();
    console.log(storedJobApplications);
    const exists = storedJobApplications.find(jobId => jobId === id);
    if(!exists){
        storedJobApplications.push(id);
        // 3
        localStorage.setItem('job-applications', JSON.stringify(storedJobApplications))
    }
}

export { getStoredApplications, saveApplication}