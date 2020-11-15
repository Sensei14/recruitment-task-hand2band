import React, { useEffect, useState } from "react";
import Backdrop from "../Backdrop/Backdrop";
import "./Modal.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHeart,
    faPlus,
    faMapMarkerAlt,
    faShare,
    faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

import { useSearch } from "../../hooks/search-hook";

const Modal = ({ show, onClose, pickedPhoto }) => {
    const [photo, setPhoto] = useState();

    const { fetchPhoto } = useSearch();

    useEffect(() => {
        if (!pickedPhoto) return;
        const fetchSinglePhoto = async () => {
            const photo = await fetchPhoto(pickedPhoto);

            setPhoto(photo);
        };

        fetchSinglePhoto();
    }, [pickedPhoto]);

    if (!photo) {
        return <> </>;
    }

    return (
        <>
            {show && <Backdrop onClick={onClose} />}
            {show && (
                <div className='modal'>
                    <div className='modal__header'>
                        <div className='author'>
                            <img src={photo.user.profile_image.small} alt='' />
                            <div className='author__name'>
                                <span>
                                    {photo.user.first_name}
                                    {photo.user.last_name}
                                </span>
                                <span>@{photo.user.username} </span>
                            </div>
                        </div>
                        <div className='header__buttons'>
                            <span className='modal-btn'>
                                <FontAwesomeIcon icon={faHeart} color='#777' />
                            </span>
                            <span className='modal-btn'>
                                <FontAwesomeIcon icon={faPlus} color='#777' />
                            </span>
                        </div>
                    </div>
                    <div className='modal__body'>
                        <img src={photo.urls.regular} alt='' />
                    </div>
                    <div className='modal__footer'>
                        <div className='location'>
                            <FontAwesomeIcon
                                icon={faMapMarkerAlt}
                                color='#777'
                            />
                            <span>{photo.location.name}</span>
                        </div>
                        <div className='footer__buttons'>
                            <span className='modal-btn'>
                                <FontAwesomeIcon icon={faShare} color='#777' />
                                <span>share</span>
                            </span>
                            <span className='modal-btn'>
                                <FontAwesomeIcon
                                    icon={faInfoCircle}
                                    color='#777'
                                />
                                <span>info</span>
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
