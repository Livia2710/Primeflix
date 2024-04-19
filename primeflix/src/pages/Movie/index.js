import { memo, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTv, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import imageNotFound from '../../assets/images/placeholder.png';
import placeholderImage from '../../assets/glyphicons/picture-grey.svg';

import { Button, Loading } from '../../components'; // Importação de componentes
import { toast } from 'react-toastify'; // Importação do módulo de notificações

import 'react-lazy-load-image-component/src/effects/blur.css'; // Importação de estilos

import styles from './styles.module.css'; // Importação dos estilos locais
import api from '../../services/api'; // Importação do serviço de API

function Movie() {
    const { id } = useParams(); //Obtém o ID do filme da URL
    const navigate = useNavigate(); //Função de navegação

    const [movie, setMovie] = useState({}); //Armazea os detlahes do filme
    const [loading, setLoading] = useState(true); //Controlar o carrgamento

    useEffect(() => {
        async function loadMovie() {
            try {
                //Requisição para obter detalhes do filme pelo ID
                const response = await api.get(`movie/${id}`);
                //Atualiza o estado com os detlahes do filme e finaliza o carregamento
                setMovie(response.data);
                setLoading(false);
            } catch (error) {
                //Em caso de erro, redireciona de volta para a página inicial
                navigate('/', {replace: true});
            }
        }

        loadMovie(); //Chama para carregar os detalhes do filme
    }, [navigate, id]); //Dependencias do useEffect

    //Converte minutos em horas e minutos
    function conversion(mins) {
        let hrs = Math.floor(mins/60);
        let min = mind % 60;

    } 
    
 }