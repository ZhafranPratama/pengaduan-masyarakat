import { Sequelize } from "sequelize";
import db from "../config/DataBase.js";


const {DataTypes} = Sequelize;

const Pengaduan = db.define("pengaduan", {
    id_pengaduan: {type: DataTypes.INTERGER(11), primaryKey: true},
    tgl_pengaduan: DataTypes.DATE(),
    nik: DataTypes.CHAR(16),
    isi_laporan: DataTypes.TEXT(),
    foto: DataTypes.STRING(255),
    status: DataTypes.ENUM('0', 'proses', 'selesai')
}, {
    freezeTableName: true
});

export default Pengaduan;

(async()=>{
    await db.sync();
})();