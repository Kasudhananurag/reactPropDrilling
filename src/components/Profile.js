import ChangeProfile from "../components/ChangeProfile";

export default function Profile(props)
{
    return <h1>this is Profile of {props.username} <ChangeProfile setUsername = {props.setUserName} /> </h1>
}