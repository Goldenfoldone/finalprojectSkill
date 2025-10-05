
import styled from 'styled-components'
import { MyButton } from './Button'
import zamok from "../assets/img/zamok.png"
import { useState, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import people from "../assets//img/Mask group.png"

const Overlay = styled.div`
	position: fixed;
	inset: 0;
	background: rgba(0,0,0,0.6);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 2000;
`

const Card = styled.div`
	width: 429px;
	background: #fff;
	border-radius: 12px;
	padding: 18px 28px 28px 28px;
	box-shadow: 0 10px 30px rgba(0,0,0,0.4);
	position: relative;
	font-family: Inter, sans-serif;
`

const Tabs = styled.div`
	display: flex;
	gap: 16px;
	border-bottom: 1px solid rgba(0,0,0,0.08);
	padding-bottom: 12px;
	margin-bottom: 18px;
    justify-content: center;
`

const Tab = styled.button<{ active?: boolean }>`
	background: transparent;
	border: none;
	padding: 6px 0;
	font-size: 18px;
	color: ${p => p.active ? '#029491' : 'rgba(0,0,0,0.4)'};
	border-bottom: ${p => p.active ? '3px solid #029491' : '3px solid transparent'};
	cursor: pointer;
`

const Label = styled.label`
	display: block;
	color: rgba(0,0,0,0.6);
	margin-bottom: 8px;
	font-size: 14px;
`

const Input = styled.input<{ $error?: boolean }>`
	width: 100%;
	padding: 12px 14px;
	border: 1px solid ${p => p.$error ? '#e53935' : 'rgba(0,0,0,0.12)'};
	border-radius: 6px;
	margin-bottom: 6px;
	font-size: 16px;
	box-sizing: border-box;
	outline: none;
	&:focus { box-shadow: 0 6px 18px rgba(0,0,0,0.06); border-color: ${p => p.$error ? '#e53935' : 'rgba(0,0,0,0.18)'}; }
`

const ErrorText = styled.div`
	color: #e53935;
	font-size: 13px;
	margin: 6px 0 12px 0;
`

const Primary = styled.div`
	padding: 18px 20px;
`

const LinkText = styled.a`
	display: block;
	text-align: center;
	color: black;
	font-size: 14px;
	margin-bottom: 18px;
	cursor: pointer;

	&:hover{
		color: #5970FF;
	}
`

const SocialRow = styled.div`
	display:flex;
	gap: 12px;
	justify-content: start;
	margin-top: 6px;
`

const SocialBtn = styled.button`
	display: inline-flex;
	align-items: center;
	gap: 8px;
	padding: 8px 12px;
	border-radius: 6px;
	border: 1px solid #5970FF82;
	background: #fff;
	cursor: pointer;
`
const ImgUp = styled.img`
	position: absolute;
	width: 76px;
	top: 320px;
	left: 560px;
	z-index: 2001;
`

type Props = { onClose?: () => void }

export const Placeholder = ({ onClose }: Props) => {
	const [login, setLogin] = useState('+7 912 653 21 42')
	const [password, setPassword] = useState('')

	const { login: doLogin } = useContext(AuthContext)

	const [loginError, setLoginError] = useState<string | null>(null)
	const [passwordError, setPasswordError] = useState<string | null>(null)

	const validateLogin = (value: string) => {
		const v = value.trim()
		if (!v) return 'Введите логин или номер телефона'
		// simple phone/email heuristic: if contains @ -> email, else digits for phone
		const digits = v.replace(/\D/g, '')
		if (v.includes('@')) {
			// basic email check
			const ok = /^\S+@\S+\.\S+$/.test(v)
			if (!ok) return 'Некорректный email'
		} else {
			// if user typed letters in a phone-number field, show specific error
			const hasLetters = /[A-Za-zА-Яа-яЁё]/.test(v)
			if (hasLetters) return 'В номере не должно быть букв'
			// detect too few digits and return a clear message
			if (digits.length < 10) return 'В номере не хватает цифр'
		}
		return null
	}

	const validatePassword = (value: string) => {
		if (!value) return 'Введите пароль'
		if (value.length < 6) return 'Пароль должен быть не менее 6 символов'
		return null
	}

	const onChangeLogin = (v: string) => {
		setLogin(v)
		setLoginError(validateLogin(v))
	}

	const onChangePassword = (v: string) => {
		setPassword(v)
		setPasswordError(validatePassword(v))
	}

	const hasErrors = !!(loginError || passwordError)

	return (
		<Overlay onClick={() => onClose && onClose()}>
			<ImgUp src={zamok}/>
			<Card onClick={(e) => e.stopPropagation()}>
				<Tabs>
					<Tab active>Войти</Tab>
					<Tab>Зарегистрироваться</Tab>
				</Tabs>

				<div>
					<Label>Логин или номер телефона:</Label>
					<Input value={login} $error={!!loginError} onChange={e => onChangeLogin(e.target.value)} aria-invalid={!!loginError} />
					{loginError && <ErrorText>{loginError}</ErrorText>}

					<Label>Пароль:</Label>
					<Input type='password' value={password} $error={!!passwordError} onChange={e => onChangePassword(e.target.value)} aria-invalid={!!passwordError} />
					{passwordError && <ErrorText>{passwordError}</ErrorText>}

					<Primary>
						<MyButton
							variant='contained'
							bgColor="#5970FF"
							fontSize={22}
							padding="16px 156px 16px 156px"
							textColor="#FFFFFF"
							disabled={hasErrors || !login || !password}
							onClick={() => {
								// final validation
								const le = validateLogin(login)
								const pe = validatePassword(password)
								setLoginError(le)
								setPasswordError(pe)
								if (!le && !pe) {
									// simulate successful login; create a simple user object
									const user = {
										name: 'Алексей А.',
										avatarUrl: people,
										companiesUsed: 34,
										companiesLimit: 100,
									}
									doLogin(user)
									onClose && onClose()
								}
							}}
						>Войти</MyButton>
					</Primary>
                    
					<LinkText>Восстановить пароль</LinkText>

					<Label style={{ textAlign: 'left' }}>Войти через:</Label>
					<SocialRow>
						<SocialBtn>Google</SocialBtn>
						<SocialBtn>facebook</SocialBtn>
						<SocialBtn>Яндекс</SocialBtn>
					</SocialRow>
				</div>
			</Card>
		</Overlay>
	)
}

export default Placeholder

