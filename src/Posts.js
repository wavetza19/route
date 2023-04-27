import { useParams,useLocation } from "react-router-dom";
export default function Posts(){
    const {id}=useParams();
    const urlstaring=new URLSearchParams(useLocation().search);
    const name=urlstaring.get("name");
    const surname=urlstaring.get("surname");
    if(id==1) return (<>id : {id} Iphone13</>);
    if(id==2) return (<>id : {id} Iphone14</>);
    if(id) return (<>id : {id} ไม่มีของครับ;-;</>);
    if({name} && {surname}) return(<>
    Hello {name} {surname}, How are you?
    </>)
    return (<>
        Iphone 13<br/>
        Iphone 14<br/>
    </>);
}
