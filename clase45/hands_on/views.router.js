import { Router } from 'express'
import { usersService, petsService } from '../services/index.js'

const router = Router()

router.get('/', (_, res) => res.render('home', {
    title: 'Home'
}))

router.get('/users', async (_, res) => res.render('users', {
    title: 'Users',
    data: await usersService.getAll()
}))

router.get('/pets', async (_, res) => res.render('pets', {
    title: 'Pets',
    data: await petsService.getAll()
}))

export default router