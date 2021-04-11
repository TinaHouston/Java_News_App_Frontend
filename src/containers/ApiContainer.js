import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import TopArticleList from '../components/api/TopArticleList';

const ApiContainer = () => {

    const [topArticles, setTopArticles] = useState([]);

    const getTopArticles = () => {
        fetch("https://newsapi.org/v2/top-headlines?country=gb&apiKey=409459398012455496735fd6efed8331")
        .then((res) => res.json())
        .then((data) => setTopArticles(data.articles))
    }

    useEffect(() => {
        getTopArticles();
    }, [])

    return (
        <>
        <Switch>
        <Route exact path="/topstories" render = {() => {
                return <TopArticleList articles = {topArticles}/>
            }
        }/>
        </Switch>       
        </>
    )
}

export default ApiContainer;