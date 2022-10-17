import React, { useContext, useState } from 'react'
import { GlobalStoreContext } from '../store'

function SongCard(props) {

    const { store } = useContext(GlobalStoreContext);

    function removeSongHandler () {
        store.removeSong1(index)
    }

    function editHandler (){
        store.editSong1(index)
    }

    const { song, index } = props;
    let cardClass = "list-card unselected-list-card";
    return (
        <div
            key={index}
            id={'song-' + index + '-card'}
            className={cardClass}
            onDoubleClick= {editHandler}
        >
            {index + 1}.
            <a
                id={'song-' + index + '-link'}
                className="song-link"
                href={"https://www.youtube.com/watch?v=" + song.youTubeId}>
                {song.title} by {song.artist}
            </a>
            <input
                type="button"
                id={"remove-song-" + index}
                className="list-card-button"
                value={"\u2715"}
                onClick={removeSongHandler}
            />
        </div>
    );
}

export default SongCard;