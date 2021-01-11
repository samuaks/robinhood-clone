import React, {useState, useEffect} from 'react'
import './Feed.css'
import LineGraph from './LineGraph'
import TimeLine from './TimeLine'
import { Avatar } from '@material-ui/core'
import Chip from './Chip'



function Feed() {

    const [popularTopics, setTopics] = useState([
        "Technology",
        "Top Movies",
        "Upcoming Earnings",
        "Crypto",
        "Cannabis",
        "Healthcare Supplies",
        "Index ETFs",
        "Technology",
        "China",
        "Pharma",
      ]);

    return (
        <div className="feed">
            <div className="feed__container">
                <div className="feed__chart__section">
                    <div className="feed__portfolio">
                        <h1>$114,645</h1>
                        <p>+$14.63 (+0.04%) Today</p>
                    </div>

                    <div className="feed__chart">
                        <LineGraph/>
                        <TimeLine/>
                    </div>
                </div>
                <div className="feed__buying__section">
                    <h2>Buying Power</h2>
                    <h2>$4.11</h2>
                </div>
                <div className="feed__market__section">
                    <div className="feed__market__box">
                        <p>Markets closed</p>
                        <h1>Happy Thanksgiving</h1>
                    </div>
                </div>
                <div className="feed__popularlists__section">
                    <div className="feed__popularlists__intro">
                        <h1>Popular lists</h1>
                        <p>Show more</p>
                    </div>
                    <div className="feed__popularlists__badges">
                        {popularTopics.map((topic) => (
                            <Chip 
                                label={topic}
                                image={`https://avatars.dicebear.com/api/human/${topic}.svg`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feed
