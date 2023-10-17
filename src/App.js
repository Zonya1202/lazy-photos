import Photo from './Photo';
import './main.scss';
import photos from './photos.json';

const App = () => {
  return (
    <div className="container">
      <div className="photos">
        {photos.map((obj, i) => (
          <Photo key={i} name={`Photo №${i + 1}`} photo={obj} />
        ))}
      </div>
    </div>
  );
};

export default App;
