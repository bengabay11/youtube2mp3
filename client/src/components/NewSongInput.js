import config from "../config";
import React from "react";
import PropTypes from "prop-types";

export const NewSongInput = ({link, updateLink, addSong}) => {
    let checkLinkEntered = (key) => {
        if (key === config.enterKey) {
            addSong(link);
        }
    };


    return (
        <div className="column-center">
            <input type="text" className="song-link-input font" value={link} autoFocus spellCheck={false}
                   onKeyDown={(target) => checkLinkEntered(target.key)}
                   onChange={event => updateLink(event.target.value)} placeholder={config.songLinkInputPlaceHolder}/>
            <button className="add-song-button song-form-button font"
                    onClick={event => addSong(link)}>{config.addSongButtonText}</button>
        </div>
    );
};

NewSongInput.propTypes = {
    link: PropTypes.string.isRequired,
    updateLink: PropTypes.func.isRequired,
    addSong: PropTypes.func.isRequired
};