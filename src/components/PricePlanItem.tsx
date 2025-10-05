import PricePlanCard from './PricePlanCard'
import ligths from "../assets/img/light.png"
import nout from "../assets/img/стрела (2).png"
import strel from "../assets/img/стрела (1).png"
import styled from 'styled-components'

const plans = [
    {
        title: 'Beginner',
        subtitle: 'Для небольшого исследования',
        price: '799 ₽',
        oldPrice: '1 200 ₽',
        installment: 'или 150 ₽/мес. при рассрочке на 24 мес.',
        features: [
            'Безлимитная история запросов',
            'Безопасная сделка',
            'Поддержка 24/7'
        ],
        iconSrc: ligths,
        buttonText: 'Подробнее',
        color: '#FFB64F'
    },
    {
        title: 'Pro',
        subtitle: 'Для HR и фрилансеров',
        price: '1 299 ₽',
        oldPrice: '2 600 ₽',
        installment: 'или 279 ₽/мес. при рассрочке на 24 мес.',
        features: [
            'Все пункты тарифа Beginner',
            'Экспорт истории',
            'Рекомендации по приоритетам'
        ],
        iconSrc: strel,
        buttonText: 'Подробнее',
        color: '#7CE3E1'
    },
    {
        title: 'Business',
        subtitle: 'Для корпоративных клиентов',
        price: '2 379 ₽',
        oldPrice: '3 700 ₽',
        installment: '',
        features: [
            'Все пункты тарифа Pro',
            'Безлимитное количество запросов',
            'Приоритетная поддержка'
        ],
        iconSrc: nout,
        buttonText: 'Подробнее',
        color: '#000000'
    }
]

const Main = styled.div`
    display: flex;
    margin-top: 70px;
    margin-bottom: 118px;
    gap: 37px;
`

export const PricePlanItem = () => {
    return (
        <Main>
            {plans.map((p, i) => (
                <PricePlanCard key={i} {...p} />
            ))}
        </Main>
    )
}