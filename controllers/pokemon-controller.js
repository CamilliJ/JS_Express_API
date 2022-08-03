const pokemonModel = require('../models/pokemon-model')

exports.getData = () => {
    return pokemonModel
}

exports.getName = () => {
    return pokemonModel.name
}

exports.getTitle = () => {
    return pokemonModel.title
}

exports.getProfession = () => {
    return pokemonModel.profession
}

exports.getDescription = () => {
    return pokemonModel.description
}

exports.getExperience = () => {
    return pokemonModel.experience
}

exports.getEducation = () => {
    return pokemonModel.education
}

exports.getSkills = () => {
    return pokemonModel.skills
}