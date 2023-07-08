import TotalInfo from "./Components/TotalTable/TotalInfo";
import FormItem from "./Components/Userform/FormItem";
import Header from "./Components/Header/Header";
function App() {
  const calculateHandler = (userInput) => {
    const yearlyData = [];

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
  };
  return (
    <div>
      <Header />
      <FormItem />;
      <TotalInfo />;
    </div>
  );
}

export default App;
