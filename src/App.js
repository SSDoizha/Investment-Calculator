import React, { useState } from "react";
import TotalInfo from "./Components/TotalTable/TotalInfo";
import UserInput from "./Components/Userform/UserInput";
import Header from "./Components/Header/Header";
function App() {
  const [userInput, setUserInput] = useState(0);
  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };
  const yearlyData = [];
  if (userInput) {
    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }
  return (
    <div>
      <Header />
      <UserInput onCalculate={calculateHandler} />;
      {!userInput && <p>No investment calculate yet.</p>}
      {userInput && (
        <TotalInfo
          data={yearlyData}
          initialInvestment={userInput["current-savings"]}
        />
      )}
    </div>
  );
}

export default App;
