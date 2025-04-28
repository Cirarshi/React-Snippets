import "./App.css";
import StarRating from "./starRating.js";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <StarRating maxRating={10} />
      <StarRating color="blue" />
      <StarRating size={30} color="green" />
      <StarRating className="custom-class" color="pink" />
      <StarRating
        message={["Very Bad", "Bad", "Average", "Good", "Very Good"]}
        color="orange"
      />
      <StarRating
        maxRating={10}
        defaultRating={5}
        color="red"
        size={30}
        message={[
          "Very Bad",
          "Bad",
          "Average",
          "Good",
          "Very Good",
          "Excellent",
          "Outstanding",
          "Exceptional",
          "Superb",
          "Perfect",
        ]}
      />
    </div>
  );
}

export default App;
