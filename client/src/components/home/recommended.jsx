import React from 'react'
import { Play } from '../../assets'
import demo from '../../assets/demo2.jpg'
import './style.scss'

const Recommended = () => {
  const loop = [{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    "userId": 1,
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  }]
  return (
    <div className='recommended'>
      <div className="title">
        <h5>Recommended</h5>
      </div>
      <div className="grid">
        {
          loop?.map((elm, key) => {
            return (
              <div className="card" key={key}>
                <div>
                  <img src={demo} alt="" />
                </div>
                <div className="details">
                  <h5>{elm?.title}</h5>
                  <p>{elm?.body}</p>
                </div>

                <div className="play">
                  <button>
                    <Play
                      width={'16px'}
                      height={'16px'}
                    />
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Recommended
