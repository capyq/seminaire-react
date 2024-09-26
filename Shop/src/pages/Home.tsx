import GroupDisplay from "../composants/GroupDisplay";

const categories =  [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing"
  ];
const Home = ()=> (
    <div>
      <p>Home</p>
      <div style={{display:"flex",flexWrap:"wrap",gap:"2rem",rowGap:"2rem"}}>

      {categories.map((category)=>(
        <GroupDisplay category={category} key={category}/>
      ))
    }
    </div>
    </div>
)

export default Home;
