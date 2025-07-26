
import Profile from "./Profile";

function App() {
  const users = [
    
      

      {
        name: "Jayant chaudhary",
        age : 20,
        bio : "Backend Developer Learning react and java",
      }, 
      {
        name : "Akshita Dubey",
        age : 20,
        bio : "Intern at dehradun court, Pursuing BBA LLB from Law College Dehradun",
      },
      {
        name : "Kartikeya Pathak",
        age : 21,
        bio : "Frontend developer enthusiast with interest in UI/UX" ,
      },

      {
        name : "Himanshu Tyagi",
        age : 21,
        bio : "Full stack and Hybrid app developer",
      },


    ];

    return (
      <div>
        <h1>Meet our Team</h1>

        {users.map((user, index) => (
          <Profile
            key = {index}
            name = {user.name}
            age = {user.age}
            bio = {user.bio}
            />
        ))}
      </div>
    );
}

export default App;
