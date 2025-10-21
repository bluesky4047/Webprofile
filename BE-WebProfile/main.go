package main

import (
	"my-fiber-app/data"
	"my-fiber-app/routes"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
)

func main() {
	app := fiber.New()
	app.Use(logger.New())

	// Izinkan CORS
	app.Use(cors.New(cors.Config{
		AllowOrigins: "*", 
		AllowHeaders: "Origin, Content-Type, Accept, Authorization",
	}))

	// Ganti di sini mau pakai data mana
	data.UseDummyData1() // atau data.UseDummyDataCopy()

	// Routing
	routes.SetupRoutes(app)

	// Serve folder data/img sebagai static file
	app.Static("/data/img", "./data/img")

	// (opsional) serve file static
	app.Static("/", "./static")

	app.Listen(":3001")
}
