import { yupResolver } from '@hookform/resolvers/yup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import InputAdornment from '@material-ui/core/InputAdornment';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { submitRegister } from 'app/auth/store/registerSlice';
import * as yup from 'yup';
import _ from '@lodash';

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
	firstname: yup.string().required('You must enter display name'),
	middlename: yup.string().required('You must enter display name'),
	lastname: yup.string().required('You must enter display name'),
	email: yup.string().email('You must enter a valid email').required('You must enter a email'),
	password: yup
		.string()
		.required('Please enter your password.')
		.min(8, 'Password is too short - should be 8 chars minimum.'),
	passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
});

const defaultValues = {
	firstname: '',
	middlename: '',
	lastname: '',
	email: '',
	password: '',
	passwordConfirmation: ''
};

function JWTRegisterTab(props) {
	const dispatch = useDispatch();
	const authRegister = useSelector(({ auth }) => auth.register);

	const { control, formState, handleSubmit, reset, setError } = useForm({
		mode: 'onChange',
		defaultValues,
		resolver: yupResolver(schema)
	});

	const { isValid, dirtyFields, errors } = formState;

	useEffect(() => {
		Object.keys(authRegister.errors).forEach(key => {
			const messages = authRegister.errors[key];
			messages.forEach(message => {
				setError(key, {
					type: 'manual',
					message
				});
			});
		});
	}, [authRegister.errors, setError]);

	function onSubmit(model) {
		dispatch(submitRegister(model));
	}

	return (
		<div className="w-full">
			<form className="flex flex-col justify-center w-full" onSubmit={handleSubmit(onSubmit)}>
				<Controller
					name="firstname"
					control={control}
					render={({ field }) => (
						<TextField
							{...field}
							className="mb-16"
							type="text"
							label="First Name"
							error={!!errors.firstname}
							helperText={errors?.firstname?.message}
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<Icon className="text-20" color="action">
											person
										</Icon>
									</InputAdornment>
								)
							}}
							variant="outlined"
							required
						/>
					)}
				/>
				<Controller
					name="middlename"
					control={control}
					render={({ field }) => (
						<TextField
							{...field}
							className="mb-16"
							type="text"
							label="First Name"
							error={!!errors.middlename}
							helperText={errors?.middlename?.message}
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<Icon className="text-20" color="action">
											person
										</Icon>
									</InputAdornment>
								)
							}}
							variant="outlined"
							required
						/>
					)}
				/>

				<Controller
					name="lastname"
					control={control}
					render={({ field }) => (
						<TextField
							{...field}
							className="mb-16"
							type="text"
							label="First Name"
							error={!!errors.lastname}
							helperText={errors?.lastname?.message}
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<Icon className="text-20" color="action">
											person
										</Icon>
									</InputAdornment>
								)
							}}
							variant="outlined"
							required
						/>
					)}
				/>

				<Controller
					name="email"
					control={control}
					render={({ field }) => (
						<TextField
							{...field}
							className="mb-16"
							type="text"
							error={!!errors.email}
							helperText={errors?.email?.message}
							label="Email"
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<Icon className="text-20" color="action">
											email
										</Icon>
									</InputAdornment>
								)
							}}
							variant="outlined"
							required
						/>
					)}
				/>

				<Controller
					name="password"
					control={control}
					render={({ field }) => (
						<TextField
							{...field}
							className="mb-16"
							type="password"
							label="Password"
							error={!!errors.password}
							helperText={errors?.password?.message}
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<Icon className="text-20" color="action">
											vpn_key
										</Icon>
									</InputAdornment>
								)
							}}
							variant="outlined"
							required
						/>
					)}
				/>

				<Controller
					name="passwordConfirmation"
					control={control}
					render={({ field }) => (
						<TextField
							{...field}
							className="mb-16"
							type="password"
							label="Confirm Password"
							error={!!errors.passwordConfirmation}
							helperText={errors?.passwordConfirmation?.message}
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<Icon className="text-20" color="action">
											vpn_key
										</Icon>
									</InputAdornment>
								)
							}}
							variant="outlined"
							required
						/>
					)}
				/>

				<Button
					type="submit"
					variant="contained"
					color="primary"
					className="w-full mx-auto mt-16"
					aria-label="REGISTER"
					disabled={_.isEmpty(dirtyFields) || !isValid}
					value="legacy"
				>
					Register
				</Button>
			</form>
		</div>
	);
}

export default JWTRegisterTab;
