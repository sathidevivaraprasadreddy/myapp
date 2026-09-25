import Counter from './Counter';
import CounterButtonFunc from './CounterButtonFunc';
import ButtonClickHandler from "./ButtonClickHandler";
import ConditionalRender from "./ConditionalRender";
import StringLiterals from "./StringLiterals";
import CounterIncreasement from "./CounterIncreasement";
import DataFetcher from "./DataFetcher";
import ParentComponent from "./ParentComponent";
import SimpleForm from "./SimpleForm";
import NameList from "./NameList";


function App() {
  return (
    <div>
      <h2>EXPERIMENT 2</h2>
      <Counter />
      <CounterButtonFunc />
      <ButtonClickHandler />
      <ConditionalRender/>
      <StringLiterals/>
      <h2>EXPERIMENT 3</h2>
      <CounterIncreasement />
      <DataFetcher/>
      <ParentComponent/>
      <SimpleForm/>
      <NameList/>
    </div>
  );
}

export default App;