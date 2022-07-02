import CatItem from "./CatItem";

function Favorites({favorites}){
  if(favorites.length === 0) {
    return <div className="b_text"><p>사진 위 하트💖를 눌러 고양이 사진을 저장해보세요!</p></div>;
  }
  
  return (
    <div>
      <div className="b_text">
        <p>다른 고양이를 생성해 하트💖를 눌러 계속 저장할 수 있습니다!</p>
        <p>&#40; 아래 초기화 버튼을 누르면 새로 저장할 수 있습니다. &#41;</p>
        </div>
      <ul className="favorites">
        {favorites.map(cat => <CatItem img={cat} key={cat} />)}
      </ul>
    </div>
  );
};

export default Favorites;