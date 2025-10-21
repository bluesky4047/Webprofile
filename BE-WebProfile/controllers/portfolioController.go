package controllers

import (
	"my-fiber-app/data"
	"my-fiber-app/models"

	"github.com/gofiber/fiber/v2"
)

func GetPortfolio(c *fiber.Ctx) error {
	response := models.Response{
		Success: true,
		Message: "Data portfolio fetched successfully",
		Data:    data.GetPortfolio(),
	}
	return c.Status(fiber.StatusOK).JSON(response)
}
