import React from "react";
import st from './profile.module.css'
import avatar from '../../img/user.svg'
import PostsMaker from "../postsMaker/PostsMaker";
import Post from "../post/Post";


const Profile = () => {
    return (
        <div className={st.wrapper}>
            <div className={st.profile}>
                <div className={st.firstLine}>
                    <div className={st.avatarContainer}>
                        <div className={st.avatar}><img src={avatar}/></div>
                        <div className={st.name}>Dmitri Spac</div>
                    </div>
                    <div className={st.descriptionProfile}>
                        <div className={st.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                            consequuntur cupiditate excepturi incidunt natus
                            nulla perferendis sed temporibus vero voluptate. At fugiat id incidunt laboriosam nobis non
                            officiis recusandae suscipit veniam. Ab aliquid
                            animi beatae blanditiis, deserunt dolores dolorum eaque earum eligendi ex excepturi expedita
                            explicabo fugiat id itaque, labore magnam natus off
                            icia omnis optio pariatur praesentium quae quas quia quis quisquam reiciendis reprehenderit
                            sapiente sit sunt tempore voluptatem voluptates, voluptatum.
                            .
                        </div>
                    </div>
                </div>
                <div className={st.twoLine}>
                    <PostsMaker/>
                </div>
                <div className={st.thridLine}>
                    <Post text="Yo. I`is my first post"/>
                    <Post text="Lorem ipsum dolor sit amet."/>
                    <Post text="Hi. How a you"/>
                </div>
            </div>
        </div>
    )
}

export default Profile