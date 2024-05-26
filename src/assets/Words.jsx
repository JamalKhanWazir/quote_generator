import React from "react";

const Words = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        backgroundColor: "rgb(50, 50, 50)",
        padding: "20px",
        borderRadius: "2rem",
        color: "wheat",
      }}
    >
      {words.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
};

export default Words;

export const words = [
  "age",
  "alone",
  "amazing",
  "anger",
  "architecture",
  "art",
  "attitude",
  "beauty",
  "best",
  "birthday",
  "business",
  "car",
  "change",
  "communication",
  "computers",
  "cool",
  "courage",
  "dad",
  "dating",
  "death",
  "design",
  "dreams",
  "education",
  "environmental",
  "equality",
  "experience",
  "failure",
  "faith",
  "family",
  "famous",
  "fear",
  "fitness",
  "food",
  "forgiveness",
  "freedom",
  "friendship",
  "funny",
  "future",
  "god",
  "good",
  "government",
  "graduation",
  "great",
  "happiness",
  "health",
  "history",
  "home",
  "hope",
  "humor",
  "imagination",
  "inspirational",
  "intelligence",
  "jealousy",
  "knowledge",
  "leadership",
  "learning",
  "legal",
  "life",
  "love",
  "marriage",
  "medical",
  "men",
  "mom",
  "money",
  "morning",
  "movies",
  "success",
];
