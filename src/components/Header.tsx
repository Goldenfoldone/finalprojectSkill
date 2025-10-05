import { Link } from './Link'
import styled, { keyframes } from "styled-components"
import logo from "../assets/img/logo.png"
import { MyButton } from './Button'
import React, { useState, useContext, useEffect } from 'react'
import Placeholder from './Placeholder'
import { AuthContext } from '../context/AuthContext'
import avatarPlaceholder from '../assets/img/logo.png'
import { CircularProgress } from '@mui/material'

const Main = styled.div`
    background-color: #ffffff52;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 60px;
    padding-right: 60px;
`
const DivLink = styled.div`
    display: flex;
    gap: 49px;
`
const MyImg = styled.img`
    height: 93px;
`
const DivButton = styled.div`
        display: flex;
        gap: 20px;
        align-items: center;
`
const UserBlock = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`
const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-size: 14px;
    color: #333;
`
const UserName = styled.div`
    font-weight: 600;
`
const SmallGrey = styled.div`
    font-size: 12px;
    color: rgba(0,0,0,0.5);
`
const Avatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`
const CompanyBadge = styled.div`
    background: #f5f7f8;
    padding: 8px 12px;
    border-radius: 8px;
    display: grid;
    gap: 7px;
    grid-template-columns: 1fr auto;
    grid-template-rows: 1fr auto;
    color: rgba(0,0,0,0.6);
    font-size: 13px;
`
const Stick = styled.div`
    width: 2px;
    background-color: #029491;
`

type LimitIsplProps = {
    $color?: string;
}

const LimitIspl = styled.p<LimitIsplProps>`
    margin: 0 0;
    font-weight: 700;
    font-size: 14px;
    color: ${props => props.$color ?? 'black'};
`
const Compeny = styled.div`
    color:rgba(0,0,0,0.35);
`
function GradientCircularProgress() {
  return (
    <React.Fragment>
      <svg width={0} height={0}>
        <defs>
          <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e01cd5" />
            <stop offset="100%" stopColor="#1CB5E0" />
          </linearGradient>
        </defs>
      </svg>
      <CircularProgress sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }} />
    </React.Fragment>
  );
}

export const Header = () => {
        const [showModal, setShowModal] = useState(false)
        const { user, logout } = useContext(AuthContext)
        const [badgeLoading, setBadgeLoading] = useState(false)

        // show a loader briefly when user becomes available (simulate network delay)
        useEffect(() => {
            let t: any
            if (user) {
                setBadgeLoading(true)
                t = setTimeout(() => setBadgeLoading(false), 800)
            } else {
                setBadgeLoading(false)
            }
            return () => clearTimeout(t)
        }, [user])
    return(
        <>
        <Main>
            <MyImg src={logo} alt='logo'/>
            <DivLink>
                <Link to={'/'}>Главная</Link>
                <Link to={'/'}>Тарифы</Link>
                <Link to={'/'}>FAQ</Link>
            </DivLink>
                        <DivButton>
                                {!user ? (
                                    <>
                                        <MyButton variant='text' disabled={true}>Зарегестрироваться</MyButton>
                                        <Stick/>
                                        <MyButton variant='contained' onClick={() => setShowModal(true)}>Войти</MyButton>
                                    </>
                                ) : (
                                    <>
                                        {badgeLoading ? (
                                        <CompanyBadge><GradientCircularProgress /></CompanyBadge>
                                        ) :(<CompanyBadge>
                                            <Compeny>Использовано компаний</Compeny>
                                            <LimitIspl> {user.companiesUsed ?? 0} </LimitIspl>
                                            
                                            <div style={{color:'rgba(0,0,0,0.35)'}}>Лимит по компаниям </div>
                                            <LimitIspl $color='#8AC540'> {user.companiesLimit ?? 100} </LimitIspl>
                                        </CompanyBadge>)}
                                        <UserBlock>
                                            <UserInfo>
                                                <UserName>{user.name}</UserName>
                                                <SmallGrey style={{cursor:'pointer'}} onClick={() => { logout() }}>Выйти</SmallGrey>
                                            </UserInfo>
                                            <Avatar src={user.avatarUrl ?? avatarPlaceholder} alt="avatar" />
                                        </UserBlock>
                                    </>
                                )}
                        </DivButton>
        </Main>
        {showModal && <Placeholder onClose={() => setShowModal(false)} />}
        </>
    )
}