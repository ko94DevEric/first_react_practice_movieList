import React, { Component } from 'react';
import './css/App.css';
import Movie from './Movie'

//moive objects
/**Rendering Component LifeCycle

  1.ComponentWillMount 
    1. API 요청
    2. Started Cycle

  2.render 
    1. Data 관련 작업
      1. A Component is Exist React World at now

  3.ComponentDidMount
    1. Component on the react World on application
*/

/** UPdate Component 
 *  1. componentWillReciveProps
 *  2. shouldComponentUpdate 
 *    1. 차이점 발생 --> true
 *  3. componentWillUpdate
 *  4. Render
 *  4.ComponentDidUpdate * 
 */

  /** State
   *  1. 모든 Component 안에 존재 
   *  2. State 변화 시 새롭게 render 작업 실행   *
   *  3. 직접적으로 변경 불가능 
   */

  /** stateless functional component 
   *  1. state 가 존재하지 않는 component 
   *  2. 한개는 state 가 있는 것 하나는 stateless -> props 밖에 없음 
   *  3. class가 아니라 functional component 로 바꾸면 됨 
   * 
   */

//App component
class App extends Component {

  state = {};

  componentWillMount(){
    console.log("will mount");
  }
  
  componentDidMount(){
    // Mount 후 5초 대기 후 greeting update 
    /*setTimeout( () => {
        //this.state.greeting = " someThing "  // XXXX  안됨 직접적으로 건드릴 수 없음 
        //setState 를 이용해 새롭게 정의   
        this.setState({
          greeting : " hello again "
        })
    }, 5000)*/
    
    //promise 여러가지 경우의 수를 제공 
    this._getMovies();
  }

  _getMovies = async()=>{
    const movies = await this._callApi();
    
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?quality=3D?sort_by=rating')
    .then( (res)  => res.json())
    .then( (json) => json.data.movies)
    .catch( (err) => console.log(err));
  }

  _renderMovies = () => {   
    const movies = this.state.movies.map( (movie) => {
      return <Movie 
              title ={movie.title_english}
              poster={movie.medium_cover_image}
              synopsis={movie.synopsis} 
              key={movie.id} />
    });
    return movies;
  }
  render() {
    
    const {movies} = this.state;

    return (
      <div className={movies ? "App" : "App--loading"} >          
          {movies ? this._renderMovies() : "App--loading" }
      </div>
    );
  }
}

export default App;