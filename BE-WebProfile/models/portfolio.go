package models

type Portfolio struct {
	Img			string `json:"img"`
	Title			string `json:"title"`
	Description 	string `json:"description"`
	TechStack 	string `json:"techStack"`
	Link		[]string `json:"link"`
	Client 	string `json:"client"`

	
}

type PortfolioList struct {
	Portfolio []Portfolio `json:"portfolio"`
}