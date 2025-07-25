
import Profile from "./Profile";

function App() {
  return (
    <div>
      <h1>Meet our Team</h1>

      <Profile 
        name= "Jayant chaudhary"
        age = {20}
        bio = "Backend Developer Learning react and java"
        />

      <Profile
        name = "Akshita Dubey"
        age = {20}
        bio = "Intern at dehradun court, Pursuing BBA LLB from Law College Dehradun"
      
      />

      <Profile
        name = "Kartikeya Pathak"
        age = {21}
        bio = "Frontend developer enthusiast with interest in UI/UX" 
      />

      <Profile
        name = "Himanshu Tyagi"
        age = {21}
        bio = "Full stack and Hybrid app developer"
      />

    </div>
  );
}

export default App;
