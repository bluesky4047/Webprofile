package routes

import (
	"my-fiber-app/controllers"

	"github.com/gofiber/fiber/v2"
)

func SetupRoutes(app *fiber.App) {
	app.Get("/portfolio", controllers.GetPortfolio)
}
