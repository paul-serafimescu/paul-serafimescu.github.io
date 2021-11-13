import * as Components from './components';

function App(): JSX.Element {
  return (
    <Components.Layout>
      <Components.Background />
      <Components.About />
      <Components.Projects />
      <Components.Contact />
      <Components.Footer />
    </Components.Layout>
  );
}

export default App;
