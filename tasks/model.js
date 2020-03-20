const db = require('../data/db-config.js')

const getAll = () => {
  return Promise.all([db('tasks'), db('projects')]).then(res => {
    const [tasks, projects] = res

    const modifiedTasks = tasks.map(task => {
      const taskProjects = projects.filter(
        project => project.id === task.project_id
      )

      return {
        id: task.id,
        description: task.description,
        notes: task.notes,
        completed: task.completed,
        projectName: taskProjects[0].name,
        projectDescription: taskProjects[0].description
      }
    })
    return modifiedTasks
  })
}

const insert = task => {
  return db('tasks').insert(task)
}

module.exports = { getAll, insert }
