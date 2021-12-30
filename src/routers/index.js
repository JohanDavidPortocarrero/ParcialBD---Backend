const {Router} = require('express');
const router = Router();

const { getRol, 
        insertSedes, 
        getSedes, 
        getSedeByID, 
        deleteSedes, 
        updateSede, 
        getUsuarios, 
        getUsuariosById,
        crearteUsuarios,
        getRolById,
        createRol,
        updateRol,
        deleteRol,
        getAdmins,
        getAdminById,
        createAdmin,
        updateAdmin,
        deleteAdmin,
        updateUsuarios,
        deleteUsuarios,
        getPersonal,
        getPersonalById,
        createPersonal,
        updatePersonal,
        deletePersonal,
        getProfesores,
        getProfesorById,
        createProfesor,
        updateProfesor,
        deleteProfesor,
        getEstudiantes,
        getEstudianteById,
        createEstudiante,
        updateEstudiante,
        deleteEstudiante,
        getCursos,
        getCursoById,
        createCurso,
        updateCurso,
        deleteCurso,
        getMatricula,
        getMatriculaById,
        createMatricula,
        updateMatricula,
        deleteMatricula,
        getAsistencias,
        getAsistenciaById,
        createAsistencia,
        updateAsistencia,
        deleteAsistencia} = require('../controllers/indexControllers');

/* Rol */
router.get('/roles', getRol);
router.get('/roles/:id', getRolById);
router.post('/roles', createRol);
router.put('/roles/:id', updateRol);
router.delete('/roles/:id', deleteRol);

/* Sede */
router.get('/sedes', getSedes);
router.get('/sedes/:id', getSedeByID);
router.post('/sedes', insertSedes);
router.put('/sedes/:id', updateSede);
router.delete('/sedes/:id', deleteSedes);

/* Usuarios */
router.get('/usuarios', getUsuarios);
router.get('/usuarios/:id', getUsuariosById);
router.post('/usuarios', crearteUsuarios);
router.put('/usuarios/:id', updateUsuarios);
router.delete('/usuarios/:id', deleteUsuarios);

/* Personal */
router.get('/personal', getPersonal);
router.get('/personal/:id', getPersonalById);
router.post('/personal', createPersonal);
router.put('/personal/:id', updatePersonal);
router.delete('/personal/:id', deletePersonal);


/* Administradores */
router.get('/admins', getAdmins);
router.get('/admins/:id', getAdminById);
router.post('/admins', createAdmin);
router.put('/admins/:id', updateAdmin);
router.delete('/admins/:id', deleteAdmin);

/* Profesores */
router.get('/profesores', getProfesores);
router.get('/profesores/:id', getProfesorById);
router.post('/profesores', createProfesor);
router.put('/profesores/:id', updateProfesor);
router.delete('/profesores/:id', deleteProfesor);

/* Estudiantes */
router.get('/estudinates', getEstudiantes);
router.get('/estudinates/:id', getEstudianteById);
router.post('/estudinates', createEstudiante);
router.put('/estudinates/:id', updateEstudiante);
router.delete('/estudinates/:id', deleteEstudiante);

/* Cursos */
router.get('/cursos', getCursos);
router.get('/cursos/:id', getCursoById);
router.post('/cursos', createCurso);
router.put('/cursos/:id', updateCurso);
router.delete('/cursos/:id', deleteCurso);

/* Matricula */
router.get('/matricula', getMatricula);
router.get('/matricula/:id', getMatriculaById);
router.post('/matricula', createMatricula);
router.put('/matricula/:id', updateMatricula);
router.delete('/matricula/:id', deleteMatricula);

/* Asistencia */
router.get('/asistencia', getAsistencias);
router.get('/asistencia/:id', getAsistenciaById);
router.post('/asistencia', createAsistencia);
router.put('/asistencia/:id', updateAsistencia);
router.delete('/asistencia/:id', deleteAsistencia);

module.exports = router;