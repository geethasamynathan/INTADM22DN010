import React,{useState,useEffect} from 'react';
import AdminNavigation from './Admin/AdminNavigation';
import Navigation from './HomePage/Navigation';
import UserNavigation from './HomePage/userNavigation';
function CheckNavigation() {  
    const [luser, setluser] = useState(); 
    const [auser, setauser] = useState();  
    useEffect(() => {  
        var aa = localStorage.getItem('AdminData');  
        var ba = JSON.parse(aa);  
        //console.log(ba);  
        if(ba!=null)
        {
            setauser(true);
        } 
         
        var ulogin=localStorage.getItem('userData');
        var ulog=JSON.parse(ulogin);
        //console.log(ulog);
    
        if(ulog!=null)
        {
            setluser(true);
        }
      
  
    }, []);  
    
    
    return(
        
        <>
        {auser?<AdminNavigation/>:luser?<UserNavigation/>:<Navigation/>}
        </>
    )
}

  
export default CheckNavigation