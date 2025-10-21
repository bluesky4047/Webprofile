package data

import "my-fiber-app/models"

var Portfolio1 = models.PortfolioList{
	Portfolio: []models.Portfolio{
		{Img:"/data/img/card-1-D83uj-qZ.png",Title:"Krigav LTD (News & Media, UK)", Description: "Krigav LTD is a news and media web service developed for a UK-based media company. It includes content management tools for editors and journalists, supporting SEO optimization and high-performance content delivery.", TechStack: "ExpressJS, NextJS, Spotify API, Apple Auth API, Google Oauth, Firebase, CronJobs, MySQL, AWS", Link: []string{"https://festyful.com/","https://festyful.com/", "https://api-bt.soundclub.com/"} , Client: "Festyful Ltd (United Kingdom)" },
		{Img:"/data/img/card-2-BJ8-9N8h.png",Title:"EdgeProp Singapore (Property Tech)", Description: "EdgeProp is one of Singapore’s leading real estate portals, offering property listings, news, and analytics. The platform supports subscription features and integrates Stripe Payment Gateway for premium user access.", TechStack: "Laravel, ExpressJS, NextJS, Stripe API", Link: []string{"https://edgeprop.sg/", "https://www.squarefoot.com.sg/"} , Client: "EdgeProp Singapore"   },
		{Img:"/data/img/card-3-Ka1ll87R.png",Title:"Buniversity — University Management Portal", Description: "Buniversity is a university web management system designed to simplify academic administration, including course management, lecturer data, and student performance records.", TechStack: "Laravel Blade, MySQL", Link: []string{"https://buniversity.idkoding.com/"} , Client: "BuildWithAngga & IDKoding"   },
		{Img:"/data/img/card-4-1lvzje-u.png",Title:"MyFood — QR-Based Restaurant Ordering System", Description: "MyFood is a restaurant web application that enables customers to scan QR codes, browse menus, order meals, and complete payments securely via Xendit integration. It improves operational efficiency and user convenience.", TechStack: "Laravel, Livewire, Xendit API, QRCode, MySQL", Link: []string{"https://myfood.idkoding.com/scan"} , Client: "BuildWithAngga & IDKoding"   },
		{Img:"/data/img/card-5-TrbU7d8r.png",Title:"WebTravel — Online Travel Booking Platform", Description: "WebTravel is a modern online travel booking platform where users can search, book, and pay for trips securely. The platform features include a CMS admin to manage bookings, destinations, and transactions.", TechStack: "Laravel, Inertia, ReactJS, Xendit, MySQL", Link: []string{"https://webtravel.idkoding.com/"} , Client: "BuildWithAngga & IDKoding"   },
		{Img:"/data/img/card-6-CMi2awuo.png",Title:"SiakadCloud — Sistem Informasi Akademik", Description: `SiakadCloud is a comprehensive cloud-based Academic Information System (SIAKAD) developed to modernize university and school management. The platform provides an end-to-end digital solution for handling academic activities, finance, and reporting in one place.<br>
		It supports **three main user roles** — **Admin, Lecturer (Dosen), and Student (Mahasiswa)** — each with dedicated dashboards and access levels:<br>
		- **Admin:** Manage users, academic years, courses, schedules, KRS/KHS validation, and tuition transactions.<br>
		- **Lecturer:** Record attendance (Absensi), manage course materials, input grades, and monitor student performance.<br>
		- **Student:** Register courses (KRS), view academic transcripts (KHS), check schedules, attendance records, and payment status.<br>
		The platform also includes:<br>
		- **Dynamic CMS Dashboard** for academic data management<br>
		- **Interactive analytics and charts** powered by Highchart.js<br>
		- **Secure tuition payment system** integrated with Midtrans Payment Gateway<br>
		- **Cloud-ready architecture** for scalability and real-time data access`, TechStack: "ExpressJS, NextJS, Highchart.js, Midtrans, MySQL", Link: []string{"https://siakadcloud.idkoding.com/", "https://mern-siakadcloud.idkoding.com/"} , Client: "BuildWithAngga & IDKoding"   },
		{Img:"/data/img/card-6-CMi2awuo.png",Title:"IDKoding — Online Learning Platform", Description: "IDKoding is an educational platform built for online coding and technology learning. It provides structured classes, interactive videos, and progress tracking to help students learn effectively.", TechStack: "Laravel, InertiaJS, ReactJS, MySQL", Link: []string{"https://idkoding.com/"} , Client: "Internal educational platform by IDKoding (made by Hafid)."   },
		{Img:"/data/img/card-6-CMi2awuo.png",Title:"Eternity Invitation — Wedding Invitation and Digital Guestbook QR Code", Description: `Eternity Invitation is a complete digital wedding invitation platform that allows couples to design and manage online invitations easily. It features a **customizable CMS**, **RSVP management**, **Digital Guestbook**, **QR Code-based guest check-in**, and **automated CronJobs** for scheduled reminders and analytics.

The system provides both static and dynamic invitation themes, combining elegance and technology for a seamless guest experience.`, TechStack: "Laravel, RESTful APIs, CronJob, ExpressJS, NextJS, MySQL", Link: []string{"https://eternityinvitation.com/"} , Client: " Eternity Invitation — a digital wedding invitation brand under PT. Eternity Tech International."   },
		{Img:"/data/img/card-6-CMi2awuo.png",Title:"Komship — E-commerce Shipping & Fulfillment Platform", Description: "Komship is an Indonesian e-commerce shipping and fulfillment platform that helps online sellers manage orders, deliveries, and logistics efficiently. The system connects merchants with courier partners, automates order tracking, and simplifies payment settlements.", TechStack: "Laravel, RESTful APIs, VueJS, and MySQL", Link: []string{"www.domain.com"} , Client: "PT. Kampung Marketerindo Berdaya (Komerce)"   },
	},
}

type Dummy1Repository struct{}

func (r *Dummy1Repository) GetPortfolio() models.PortfolioList { return Portfolio1}


