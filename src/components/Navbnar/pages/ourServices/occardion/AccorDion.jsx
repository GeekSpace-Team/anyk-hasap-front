import React, { useEffect, useState } from 'react'
import { Grid, Stack } from '@mui/material'
import { FiPlus, FiMinus } from 'react-icons/fi';
import Container from '@mui/material/Container';
import { useTranslation } from 'react-i18next';
import { i18n } from '../../../../../Language/LangConfig';
import './accordion.css'

const AccorDion = () => {

    const [clicked, setClicked] = useState(false);

    const toggle = index => {
        if (clicked === index) {
            return setClicked(null)
        }
        setClicked(index)
    }



    const { t } = useTranslation();
    useEffect(() => {
        let l = localStorage.getItem('lang');
        if (l != null && typeof l !== 'undefined') {
            i18n.changeLanguage(l);
        } else {
            i18n.changeLanguage("en");
        }
    }, []);
    return (
        <div>
            <Container maxWidth="lg">
                <Grid container >
                    {AccData.map((item, index) => {
                        return (
                            <>
                                <Grid onClick={() => toggle(index)} key={index} item lg={2} md={2} xs={12} sm={12}>
                                    <img src={item.img} style={{ cursor: 'pointer' }} />
                                </Grid>
                                <Grid onClick={() => toggle(index)} key={index} item lg={10} md={10} xs={12} sm={12}>
                                    <Stack direction={'row'}>
                                        <Stack direction={'column'}>
                                            <h3 className='accordionTitle' style={{ cursor: 'pointer' }}>ОБЯЗАТЕЛЬНЫЙ АУДИТ</h3>
                                            <p className='accText' style={{ cursor: 'pointer' }}>Аудиторская компания «Anyk Hasap» с 2018 года предоставляет широкий спектр услуг в области аудита, бухгалтерского учета, налогообложения и управленческого консультирования.</p>
                                        </Stack>
                                        <Stack>
                                            <span>{clicked === index ? <FiMinus style={{ color: '#000026' }} /> : <FiPlus style={{ color: ' #000026' }} />}</span>
                                        </Stack>
                                    </Stack>
                                    {clicked === index ? (
                                        <ul className='accMore'>
                                            <Stack spacing={3}>
                                                <li>Аудиторы «Anyk Hasap», имеют более 20-и лет стажа безупречной работы в сфере аудита, бухгалтерского учета и налогового консультирования в организациях различных сфер деятельности, аудиторы в штате — все надёжные профессионалы.</li>
                                                <li>Аудиторы «Anyk Hasap», имеют более 20-и лет стажа безупречной работы в сфере аудита, бухгалтерского учета и налогового консультирования в организациях различных сфер деятельности, аудиторы в штате — все надёжные профессионалы При выборе аудиторской компании, наряду со стоимостью услуг, важную роль играют деловая репутация и опыт.</li>
                                                <li>Поэтому, мы беремся только за ту работу, которую можем выполнить действительно хорошо, с полной ответственностью и гарантией качества! Лицензия на осуществление аудиторской деятельности выдан Министерством экономики и финансов Туркменистана №1-17-29-50 от 28.12.2021 года. «Anyk Hasap» стремится принести реальную пользу вашему бизнесу, уберечь от ошибок, снизить налоговые и финансовые риски – предоставить услуги высокого качества.</li>
                                            </Stack>
                                        </ul>
                                    ) : null}
                                </Grid>
                            </>
                        )
                    })}
                </Grid>
            </Container>
        </div>
    )
}

export default AccorDion






const AccData = [
    {
        id: '1',
        img: '/img/firstImg.png',
        title: 'homeInfoTitle',
        desc: 'ourServicText',
        more: 'ourServicText'
    },
    {
        id: '2',
        img: '/img/secondImg.png',
        title: 'homeInfoTitle',
        desc: 'ourServicText',
        more: 'ourServicText'
    },
    {
        id: '3',
        img: '/img/thirdImg.png',
        title: 'homeInfoTitle',
        desc: 'ourServicText',
        more: 'ourServicText'
    },
    {
        id: '4',
        img: '/img/fourthImg.png',
        title: 'homeInfoTitle',
        desc: 'ourServicText',
        more: 'ourServicText'
    },
    {
        id: '5',
        img: '/img/fifthImg.png',
        title: 'homeInfoTitle',
        desc: 'ourServicText',
        more: 'ourServicText'
    },
    {
        id: '6',
        img: '/img/sixthImg.png',
        title: 'homeInfoTitle',
        desc: 'ourServicText',
        more: 'ourServicText'
    }
]