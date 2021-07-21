import { authRoles } from 'app/auth';
import i18next from 'i18next';

import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
	{
		id: 'member',
		title: 'Member',
		type: 'group',
		icon: 'apps',
		auth: authRoles.user,
		children: [
			{
				id: 'member-dashboard',
				title: 'Dashboard',
				type: 'item',
				icon: 'dashboard',
				auth: authRoles.user,
				url: '/apps/member/dashboard'
			},
			{
				id: 'member-profile',
				title: 'Profile',
				type: 'item',
				icon: 'account_circle',
				auth: authRoles.user,
				url: '/apps/member/profile'
			},
			{
				id: 'member-shares',
				title: 'Shares',
				type: 'item',
				icon: 'soap',
				auth: authRoles.member,
				url: '/apps/member/shares'
			},
			{
				id: 'member-savings',
				title: 'Savings',
				type: 'item',
				auth: authRoles.member,
				icon: 'account_balance_wallet',
				url: '/apps/member/savings'
			},
			{
				id: 'member-loans',
				title: 'Loans',
				type: 'item',
				auth: authRoles.member,
				icon: 'monetization_on',
				url: '/apps/member/savings'
			},
			{
				id: 'member-announcements',
				title: 'Announcements',
				type: 'item',
				icon: 'campaign',
				auth: authRoles.member,
				url: '/apps/member/announcements'
			}
		]
	},
	{
		id: 'admin',
		title: 'Administration',
		type: 'group',
		icon: 'apps',
		auth: authRoles.admin,
		children: [
			{
				id: 'admin-dashboards',
				title: 'Dashboard',
				type: 'item',
				icon: 'dashboard',
				auth: authRoles.admin,
				url: '/apps/admin/dashboard'
			},
			{
				id: 'admin-memberships',
				title: 'Memberships',
				type: 'item',
				icon: 'people',
				auth: authRoles.admin,
				url: '/apps/admin/dashboard'
			},
			{
				id: 'admin-finance',
				title: 'Finance',
				auth: authRoles.admin,
				icon: 'account_balance',
				type: 'collapse',
				children: [
					{
						id: 'admin-finance-savings',
						title: 'Savings',
						type: 'item',
						auth: authRoles.admin,
						url: '/apps/admin/savings'
					},
					{
						id: 'admin-finance-shares',
						title: 'Shares',
						type: 'item',
						auth: authRoles.admin,
						url: '/apps/admin/shares'
					},
					{
						id: 'admin-finance-loans',
						title: 'Loans',
						type: 'item',
						auth: authRoles.admin,
						url: '/apps/admin/loans'
					}
				]
			},
			{
				id: 'admin-settings',
				title: 'Settings',
				icon: 'settings',
				auth: authRoles.admin,
				type: 'collapse',
				children: [
					{
						id: 'admin-finance-savings',
						title: 'Users and Permissions',
						type: 'item',
						auth: authRoles.admin,
						url: '/apps/admin/savings'
					},
					{
						id: 'admin-finance-shares',
						title: 'Announcements',
						type: 'item',
						auth: authRoles.admin,
						url: '/apps/admin/shares'
					},
					{
						id: 'admin-finance-loans',
						title: 'Transactions',
						type: 'item',
						auth: authRoles.admin,
						url: '/apps/admin/loans'
					}
				]
			}
		]
	}
];

export default navigationConfig;
