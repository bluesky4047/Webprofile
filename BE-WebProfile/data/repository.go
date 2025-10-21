package data

import "my-fiber-app/models"

// Interface agar bisa menukar sumber data
type Repository interface {
	GetPortfolio() models.PortfolioList
}

// Pilihan: DummyDataRepository atau DummyData1Repository
var activeRepo Repository = &Dummy1Repository{}

// Fungsi untuk mengganti repository aktif
func UseDummyData() {
	activeRepo = &Dummy1Repository{}
}

func UseDummyData1() {
	activeRepo = &Dummy1Repository{}
}

// Fungsi getter universal
func GetPortfolio() models.PortfolioList { return activeRepo.GetPortfolio() }
