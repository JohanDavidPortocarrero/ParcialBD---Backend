const {Pool} = require('pg');


const config = {
    user: 'cxgxgmclongztt',
    host: 'ec2-34-236-87-247.compute-1.amazonaws.com',
    password:'5c1f5d5314dbb853d7d6899ec20f1aefe674e8a6e8f5999001d7bb82bbb3300d',
    database: 'd3gbnelq0j3cjr',
    port: '5432',
    ssl: {
        rejectUnauthorized: false
    }
};

const pool = new Pool (config);

/* CRUD ROL */
const getRol = async (req, res) => {
    try{
        const response = await pool.query('select * from rol'); 
        res.status(200).json(response.rows)
    }catch(e){
        console.log(e)
    }
}

const getRolById = async (req, res) => {
    try{
        const coman = 'select * from rol where id = $1';
        const values = [req.params.id]
        const response = await pool.query(coman, values);
        res.json(response.rows)
    }catch(e){
        console.log(e)
    }
}

const createRol = async (req, res) => {
    try{
        const {type_rol} = req.body;

        const coman = 'INSERT INTO rol (type_rol) VALUES ($1)';
        const values = [type_rol];
        const response = await pool.query(coman, values);

        res.json({
            message : 'Se creado el rol con exito',
            body : {
                dato : {
                    type_rol
                }
            }
        })
    }catch(e){
        console.log(e)
    }
}

const updateRol = async (req, res) => {
    try{
        const id = req.params.id;
        const {type_rol} = req.body;
        const coman = 'UPDATE rol SET type_rol = $1 WHERE id = $2';
        const value = [type_rol, id];
        const response = await pool.query(coman, value);
        res.json({
            message : 'Rol Actualizado',
            body : {
                dato : {
                    type_rol
                }
            }
        })
    }catch(e){
        console.log(e)
    }
}

const deleteRol = async (req, res) => {
    try{
        const coman = 'DELETE FROM rol WHERE id = $1';
        const value = [req.params.id]
        const response = pool.query(coman, value);
        res.json('El rol # ' + req.params.id + ' asido eliminada')
    }catch(e){
        console.log(e)
    }
}

/* CRUD SEDES */
const getSedes = async (req, res) => {
    try{
        const response = await pool.query('select * from sedes'); 
        res.status(200).json(response.rows)
    }catch(e){
        console.log(e)
    }
}

const getSedeByID = async (req, res) => {
    try{
        const coman = 'select * from sedes where id = $1';
        const values = [req.params.id]
        const response = await pool.query(coman, values);
        res.json(response.rows)
    }catch(e){
        console.log(e);
    }
}

const insertSedes = async (req, res) => {
    try{

        const {nombre, ubicacion, id_admin} = req.body;

        const coman = 'INSERT INTO sedes (nombre, ubicacion, id_admin) VALUES ($1, $2, $3)';
        const values = [nombre, ubicacion, id_admin];
        const response = await pool.query(coman, values);

        res.json({
            message : 'Se creado la sede con exito',
            body : {
                sede : {
                    nombre,
                    ubicacion,
                    id_admin
                }
            }
        })

    }catch(e){
        console.log(e)
    }
}

const updateSede = async (req, res) => {
    try{
        const id = req.params.id;
        const {nombre, ubicacion, id_admin} = req.body;
        const coman = 'UPDATE sedes SET nombre = $1, ubicacion = $2, id_admin = $3 WHERE id = $4';
        const value = [nombre, ubicacion, id_admin, id];
        const response = await pool.query(coman, value);
        res.json({
            message : 'Sede Actualizda',
            body : {
                sede : {
                    nombre,
                    ubicacion,
                    id_admin
                }
            }
        })
    }catch(e){
        console.log(e)
    }
}

const deleteSedes = async (req, res) => {
    try{
        const coman = 'DELETE FROM sedes WHERE id = $1';
        const value = [req.params.id]
        const response = pool.query(coman, value);
        res.json('Sede ' + req.params.id + ' asido eliminada')
    }catch(e){
        console.log(e)
    }
}


/* CRUD USUARIOS */
const getUsuarios = async (req, res) => {
    try{
        const response = await pool.query('select * from usuarios'); 
        res.status(200).json(response.rows)
    }catch(e){
        console.log(e)
    }
}

const getUsuariosById = async (req, res) => {
    try{
        const coman = 'select * from usuarios where identificacion = $1';
        const values = [req.params.id]
        const response = await pool.query(coman, values);
        res.json(response.rows)
    }catch(e){
        console.log(e);
    }
}

const updateUsuarios = async (req, res) => {
    try{
        const id = req.params.id;
        const {nombres, apellidos, direccion, rol, pass} = req.body;
        const coman = 'UPDATE usuarios SET nombres = $1, apellidos = $2, direccion = $3, rol = $4, pass = $5 WHERE identificacion = $6';
        const value = [nombres, apellidos, direccion, rol, pass, id];
        const response = await pool.query(coman, value);
        res.json({
            message : 'El usuarios fue actualizado',
            body : {
                dato : {
                    id, 
                    nombres, 
                    apellidos, 
                    direccion, 
                    rol, 
                    pass
                }
            }
        })
    }catch(e){
        console.log(e)
    }
}

/* CRUD PERSONAL */
const getPersonal = async (req, res) => {
    try{
        const response = await pool.query('select * from personal'); 
        res.status(200).json(response.rows)
    }catch(e){
        console.log(e)
    }
}

const getPersonalById = async (req, res) => {
    try{
        const coman = 'select * from personal where identificacion = $1';
        const values = [req.params.id]
        const response = await pool.query(coman, values);
        res.json(response.rows)
    }catch(e){
        console.log(e)
    }
}

const updatePersonal = async (req, res) => {
    try{
        const id = req.params.id;
        const {salario, eps, arl} = req.body;
        const coman = 'UPDATE personal SET salario = $1, eps = $2, arl = $3 WHERE identificacion = $4';
        const value = [salario, eps, arl, id];
        const response = await pool.query(coman, value);
        res.json({
            message : 'Actualizado con exito',
            body : {
                dato : {
                    id, 
                    salario, 
                    eps, 
                    arl
                }
            }
        })
    }catch(e){
        console.log(e)
    }
}

/* CRUD ADMINISTRADORES */
const getAdmins = async (req, res) => {
    try{
        const response = await pool.query('select * from administradores'); 
        res.status(200).json(response.rows)
    }catch(e){
        console.log(e)
    }
}

const getAdminById = async (req, res) => {
    try{
        const coman = 'select * from administradores where identificacion = $1';
        const values = [req.params.id]
        const response = await pool.query(coman, values);
        res.json(response.rows)
    }catch(e){
        console.log(e)
    }
}

const createAdmin = async (req, res) => {
    try{
        const {identificacion, nombres, apellidos, direccion, rol, pass, nombre_usuario, salario, eps, arl} = req.body;

        const comanAdmin = 'INSERT INTO administradores (identificacion, nombre_usuario) VALUES ($1, $2)';
        const valuesAdmin = [identificacion, nombre_usuario];
        const responseAdmin = await pool.query(comanAdmin, valuesAdmin);

        const comanPers = 'INSERT INTO personal (identificacion, salario, eps, arl) VALUES ($1, $2, $3, $4)';
        const valuesPers = [identificacion, salario, eps, arl];
        const responsePers = await pool.query(comanPers, valuesPers);

        const comanUser = 'INSERT INTO usuarios (identificacion, nombres, apellidos, direccion, rol, pass) VALUES ($1, $2, $3, $4, $5, $6)';
        const valuesUser = [identificacion, nombres, apellidos, direccion, rol, pass];
        const responseUser = await pool.query(comanUser, valuesUser);

        res.json({
            message : 'Se creado el administrador con exito',
            body : {
                dato : {
                    identificacion, 
                    nombre_usuario,
                    nombres,
                    apellidos,
                    direccion,
                    rol,
                    pass,
                    salario, 
                    eps, 
                    arl
                }
            }
        })
    }catch(e){
        console.log(e)
    }
}

const updateAdmin = async (req, res) => {
    try{
        const id = req.params.id;
        const {nombre_usuario} = req.body;
        const coman = 'UPDATE administradores SET nombre_usuario = $1 WHERE identificacion = $2';
        const value = [nombre_usuario, id];
        const response = await pool.query(coman, value);
        res.json({
            message : 'Dato Actualizado',
            body : {
                dato : {
                    id, 
                    nombre_usuario
                }
            }
        })
    }catch(e){
        console.log(e)
    }
}

const deleteAdmin = async (req, res) => {
    try{
        const comanAdmin = 'DELETE FROM administradores WHERE identificacion = $1';
        const comanPers = 'DELETE FROM personal WHERE identificacion = $1';
        const comanUser = 'DELETE FROM usuarios WHERE identificacion = $1';
        const value = [req.params.id]
        const responseAdmins = pool.query(comanAdmin, value);
        const responsePers = pool.query(comanPers, value);
        const responseUser = pool.query(comanUser, value);
        res.json('El administrado identificado con ' + req.params.id + ' asido eliminada')
    }catch(e){
        console.log(e)
    }
}

/* CRUD PROFESORES */
const getProfesores = async (req, res) => {
    try{
        const response = await pool.query('select * from profesores'); 
        res.status(200).json(response.rows)
    }catch(e){
        console.log(e)
    }
}

const getProfesorById = async (req, res) => {
    try{
        const coman = 'select * from profesores where identificacion = $1';
        const values = [req.params.id]
        const response = await pool.query(coman, values);
        res.json(response.rows)
    }catch(e){
        console.log(e)
    }
}

const createProfesor = async (req, res) => {
    try{
        const {identificacion, nombres, apellidos, direccion, rol, pass, id_sede, salario, eps, arl} = req.body;

        const comanDocen = 'INSERT INTO profesores (identificacion, id_sede) VALUES ($1, $2)';
        const valuesDoncen = [identificacion, id_sede];
        const responseDocen = await pool.query(comanDocen, valuesDoncen);

        const comanPers = 'INSERT INTO personal (identificacion, salario, eps, arl) VALUES ($1, $2, $3, $4)';
        const valuesPers = [identificacion, salario, eps, arl];
        const responsePers = await pool.query(comanPers, valuesPers);

        const comanUser = 'INSERT INTO usuarios (identificacion, nombres, apellidos, direccion, rol, pass) VALUES ($1, $2, $3, $4, $5, $6)';
        const valuesUser = [identificacion, nombres, apellidos, direccion, rol, pass];
        const responseUser = await pool.query(comanUser, valuesUser);

        res.json({
            message : 'Se creado el profesor con exito',
            body : {
                dato : {
                    identificacion, 
                    id_sede,
                    nombres,
                    apellidos,
                    direccion,
                    rol,
                    pass,
                    salario, 
                    eps, 
                    arl
                }
            }
        })
    }catch(e){
        console.log(e)
    }
    
}

const updateProfesor = async (req, res) => {
    try{
        const id = req.params.id;
        const {id_sede} = req.body;
        const coman = 'UPDATE profesores SET id_sede = $1 WHERE identificacion = $2';
        const value = [id_sede, id];
        const response = await pool.query(coman, value);
        res.json({
            message : 'Dato Actualizado',
            body : {
                dato : {
                    id, 
                    id_sede
                }
            }
        })
    }catch(e){
        console.log(e)
    }
}

const deleteProfesor = async (req, res) => {
    try{
        const comanDocen = 'DELETE FROM profesores WHERE identificacion = $1';
        const comanPers = 'DELETE FROM personal WHERE identificacion = $1';
        const comanUser = 'DELETE FROM usuarios WHERE identificacion = $1';
        const value = [req.params.id]
        const responseDocen = pool.query(comanDocen, value);
        const responsePers = pool.query(comanPers, value);
        const responseUser = pool.query(comanUser, value);
        res.json('El administrado identificado con ' + req.params.id + ' asido eliminada')
    }catch(e){
        console.log(e)
    }
}

/* CRUD ESTUDIANTES */
const getEstudiantes = async (req, res) => {
    try{
        const response = await pool.query('select * from estudiantes'); 
        res.status(200).json(response.rows)
    }catch(e){
        console.log(e)
    }
}

const getEstudianteById = async (req, res) => {
    try{
        const coman = 'select * from estudiantes where identificacion = $1';
        const values = [req.params.id]
        const response = await pool.query(coman, values);
        res.json(response.rows)
    }catch(e){
        console.log(e)
    }
}

const createEstudiante = async (req, res) => {
    try{
        const {identificacion, nombres, apellidos, direccion, rol, pass, codigo_est} = req.body;

        const comanEst = 'INSERT INTO estudiantes (identificacion, codigo_est) VALUES ($1, $2)';
        const valuesEst = [identificacion, codigo_est];
        const responseEst = await pool.query(comanEst, valuesEst);

        const comanUser = 'INSERT INTO usuarios (identificacion, nombres, apellidos, direccion, rol, pass) VALUES ($1, $2, $3, $4, $5, $6)';
        const valuesUser = [identificacion, nombres, apellidos, direccion, rol, pass];
        const responseUser = await pool.query(comanUser, valuesUser);

        res.json({
            message : 'Se creado el estudiante con exito',
            body : {
                dato : {
                    identificacion, 
                    nombres, 
                    apellidos, 
                    direccion, 
                    rol, 
                    pass, 
                    codigo_est
                }
            }
        })
    }catch(e){
        console.log(e)
    }
}

const updateEstudiante = async (req, res) => {
    try{
        const id = req.params.id;
        const {codigo_est} = req.body;
        const coman = 'UPDATE estudiantes SET codigo_est = $1 WHERE identificacion = $2';
        const value = [codigo_est, id];
        const response = await pool.query(coman, value);
        res.json({
            message : 'Dato Actualizado',
            body : {
                dato : {
                    id, 
                    codigo_est
                }
            }
        })
    }catch(e){
        console.log(e)
    }
}

const deleteEstudiante = async (req, res) => {
    try{
        const coman = 'DELETE FROM estudiantes WHERE identificacion = $1';
        const comanUser = 'DELETE FROM usuarios WHERE identificacion = $1';
        const value = [req.params.id]
        const response = pool.query(coman, value);
        const responseUser = pool.query(comanUser, value);
        res.json('El estudiante identificado con ' + req.params.id + ' asido eliminada')
    }catch(e){
        console.log(e)
    }
}

/* CRUD CURSOS */
const getCursos = async (req, res) => {
    try{
        const response = await pool.query('select * from cursos'); 
        res.status(200).json(response.rows)
    }catch(e){
        console.log(e)
    }
}

const getCursoById = async (req, res) => {
    try{
        const coman = 'select * from cursos where codigo_curso = $1';
        const values = [req.params.id]
        const response = await pool.query(coman, values);
        res.json(response.rows)
    }catch(e){
        console.log(e)
    }
}

const createCurso = async (req, res) => {
    try{
        const {codigo_curso, cant_max_est, id_docente, fecha_creacion} = req.body;

        const coman = 'INSERT INTO cursos (codigo_curso, cant_max_est, id_docente, fecha_creacion) VALUES ($1, $2, $3, $4)';
        const values = [codigo_curso, cant_max_est, id_docente, fecha_creacion];
        const response = await pool.query(coman, values);

        res.json({
            message : 'Se creado el curso con exito',
            body : {
                dato : {
                    codigo_curso, 
                    cant_max_est, 
                    id_docente, 
                    fecha_creacion
                }
            }
        })
    }catch(e){
        console.log(e)
    }
}

const updateCurso = async (req, res) => {
    try{
        const id = req.params.id;
        const {cant_max_est, id_docente, fecha_creacion} = req.body;
        const coman = 'UPDATE cursos SET cant_max_est = $1, id_docente = $2, fecha_creacion = $3 WHERE codigo_curso = $4 ';
        const value = [cant_max_est, id_docente, fecha_creacion, id];
        const response = await pool.query(coman, value);
        res.json({
            message : 'Curso actualizado',
            body : {
                dato : {
                    id,
                    cant_max_est, 
                    id_docente, 
                    fecha_creacion
                }
            }
        })
    }catch(e){
        console.log(e)
    }
}

const deleteCurso = async (req, res) => {
    try{
        const coman = 'DELETE FROM cursos WHERE codigo_curso = $1';
        const value = [req.params.id]
        const response = pool.query(coman, value);
        res.json('El curso con codigo ' + req.params.id + ' asido eliminada')
    }catch(e){
        console.log(e)
    }
}

/* CRUD MATRICULADO */
const getMatricula = async (req, res) => {
    try{
        const response = await pool.query('select * from matriculado'); 
        res.status(200).json(response.rows)
    }catch(e){
        console.log(e)
    }
}

const getMatriculaById = async (req, res) => {
    try{
        const coman = 'select * from matriculado where id = $1';
        const values = [req.params.id]
        const response = await pool.query(coman, values);
        res.json(response.rows)
    }catch(e){
        console.log(e)
    }
}

const createMatricula = async (req, res) => {
    try{
        const {codigo_curso, id_est} = req.body;

        const coman = 'INSERT INTO matriculado (codigo_curso, id_est) VALUES ($1, $2)';
        const values = [codigo_curso, id_est];
        const response = await pool.query(coman, values);

        res.json({
            message : 'Se registrado la matricula con exito',
            body : {
                dato : {
                    codigo_curso, 
                    id_est
                }
            }
        })
    }catch(e){
        console.log(e)
    }
}

const updateMatricula = async (req, res) => {
    try{
        const id = req.params.id;
        const {codigo_curso, id_est} = req.body;
        const coman = 'UPDATE matriculado SET codigo_curso = $1, id_est = $2 WHERE id = $3';
        const value = [codigo_curso, id_est, id];
        const response = await pool.query(coman, value);
        res.json({
            message : 'La matricula fue actualizada',
            body : {
                dato : {
                    codigo_curso, 
                    id_est
                }
            }
        })
    }catch(e){
        console.log(e)
    }
}

const deleteMatricula = async (req, res) => {
    try{
        const coman = 'DELETE FROM matriculado WHERE id = $1';
        const value = [req.params.id]
        const response = pool.query(coman, value);
        res.json('Matricula eliminada con exito')
    }catch(e){
        console.log(e)
    }
}

/* CRUD ASISTENCIA */
const getAsistencias = async (req, res) => {
    try{
        const response = await pool.query('select * from asistencia'); 
        res.status(200).json(response.rows)
    }catch(e){
        console.log(e)
    }
}

const getAsistenciaById = async (req, res) => {
    try{
        const coman = 'select * from asistencia where id = $1';
        const values = [req.params.id]
        const response = await pool.query(coman, values);
        res.json(response.rows)
    }catch(e){
        console.log(e)
    }
}

const createAsistencia = async (req, res) => {
    try{
        const {fecha_creacion, asistio, id_usuario, id_sede} = req.body;

        const coman = 'INSERT INTO asistencia (fecha_creacion, asistio, id_usuario, id_sede) VALUES ($1, $2, $3, $4)';
        const values = [fecha_creacion, asistio, id_usuario, id_sede];
        const response = await pool.query(coman, values);

        res.json({
            message : 'Se creado la  con exito',
            body : {
                dato : {
                    fecha_creacion, 
                    asistio, 
                    id_usuario, 
                    id_sede
                }
            }
        })
    }catch(e){
        console.log(e)
    }
}

const updateAsistencia = async (req, res) => {
    try{
        const id = req.params.id;
        const {fecha_creacion, asistio, id_usuario, id_sede} = req.body;
        const coman = 'UPDATE asistencia SET fecha_creacion = $1, asistio = $2, id_usuario = $3, id_sede = $4 WHERE  id = $5';
        const value = [fecha_creacion, asistio, id_usuario, id_sede, id];
        const response = await pool.query(coman, value);
        res.json({
            message : ' Actualizda',
            body : {
                dato : {
                    fecha_creacion, 
                    asistio, 
                    id_usuario, 
                    id_sede
                }
            }
        })
    }catch(e){
        console.log(e)
    }
}

const deleteAsistencia = async (req, res) => {
    try{
        const coman = 'DELETE FROM asistencia WHERE id = $1';
        const value = [req.params.id]
        const response = pool.query(coman, value);
        res.json(' ' + req.params.id + ' asido eliminada')
    }catch(e){
        console.log(e)
    }
}

module.exports = {
    getRol,
    getRolById,
    createRol,
    updateRol,
    deleteRol,
    getSedes,
    getSedeByID,
    insertSedes,
    updateSede,
    deleteSedes,
    getUsuarios,
    getUsuariosById,
    updateUsuarios,
    getPersonal,
    getPersonalById,
    updatePersonal,
    getAdmins,
    getAdminById,
    createAdmin,
    updateAdmin,
    deleteAdmin,
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
    getMatricula,
    getMatriculaById,
    createMatricula,
    updateMatricula,
    deleteMatricula,
    getAsistencias,
    getAsistenciaById,
    createAsistencia,
    updateAsistencia,
    deleteAsistencia,
    getCursos,
    getCursoById,
    createCurso,
    updateCurso,
    deleteCurso
}