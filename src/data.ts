import cassandra from '@assets/cassandra.png'
import jason from '@assets/jason.png'
import jean from '@assets/jean.png'
import peter from '@assets/peter.png'

export const testimonials = [
	{
		image: jason,
		name: 'Jason Todd',
		job: 'Entrepreneur',
		description:
			'“The mentor is cool, how to convey each material is also detailed and easy to understand..”'
	},
	{
		image: cassandra,
		name: 'Cassandra K',
		job: 'Web Developer',
		description:
			'“The mentor is cool, how to convey each material is also detailed and easy to understand..”'
	},
	{
		image: peter,
		name: 'Peter Parker',
		job: 'PHP Enthusiast',
		description:
			'“The mentor is cool, how to convey each material is also detailed and easy to understand..”'
	},
	{
		image: jean,
		name: 'Jean Gray',
		job: 'Designer',
		description:
			'“The mentor is cool, how to convey each material is also detailed and easy to understand..”'
	}
]

import bootcamp from '@assets/bootcamp.png'
import premium from '@assets/premium.png'
import starter from '@assets/starter.png'
import superstar from '@assets/superstar.png'
export const cardItems = [
	{
		title: 'Starter',
		image: starter,
		description: 'Free class access for that start learning code and design'
	},
	{
		title: 'Premium',
		image: premium,
		description: 'Advanced material from the Starter & learn to build projects'
	},
	{
		title: 'Superstar',
		image: superstar,
		description: 'Materials for experts who have completed the premium package'
	},
	{
		title: 'Bootcamp',
		image: bootcamp,
		description: 'Informatics science training program with the latest material'
	}
]

export const links = [
	{
		to: '#home',
		linkName: 'Home'
	},
	{
		to: '#learnings',
		linkName: 'Learnings'
	},
	{
		to: '#about',
		linkName: 'About Us'
	},
	{
		to: '#testimonial',
		linkName: 'Testimonials'
	}
]

export const footerLinks = [
	{
		title: 'Company',
		links: [
			{
				to: '#home',
				linkName: 'Home'
			},
			{
				to: '#blog',
				linkName: 'Blogs'
			},
			{
				to: '#careers',
				linkName: 'Careers'
			},
			{
				to: '#portofolios',
				linkName: 'Portofolios'
			}
		]
	},
	{
		title: 'Links',
		links: [
			{
				to: '',
				linkName: 'Home'
			},
			{
				to: '',
				linkName: 'Github'
			},
			{
				to: '',
				linkName: 'Supports'
			},
			{
				to: '',
				linkName: 'FAQs'
			}
		]
	}
]
