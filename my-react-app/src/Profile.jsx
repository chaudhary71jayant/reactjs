const Profile = ({name,age,bio}) => {
    return (
        <div style={{border : "1px solid gray", padding : "10px", margin : "10px"}}>
            <h2>{name}</h2>
            <p>Age : {age}</p>
            <p>{bio}</p>
        </div>
    );
};

export default Profile;