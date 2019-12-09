/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
/**
 * Write your transction processor functions here
 */


/**
 * Handle a transaction that returns a string.
 * @param {org.hospital.record.UpdateDataMedis} tx
 * @transaction
 */
async function UpdateDataMedis(tx) {
    const oldNoRekMedis = tx.sampData.noRekMedis;
    const oldPasien = tx.sampData.pasien;
    const oldDokter = tx.sampData.dokter;
    const oldTglMasuk = tx.sampData.tglMasuk;
    const oldTglKeluar = tx.sampData.tglKeluar;
    const oldAlasanMasuk = tx.sampData.alasanMasuk;
    const oldRujukan = tx.sampData.rujukan;
    const oldAnamnesis = tx.sampData.anamnesis;
    const oldPemeriksaanFisik = tx.sampData.pemeriksaanFisik;
    const oldRiwayatAlergi = tx.sampData.riwayatAlergi;
    const oldDiagnosaPrimer = tx.sampData.diagnosaPrimer;
    const oldDiagnosaSekunder = tx.sampData.diagnosaSekunder;
    const oldTerapiDiRs = tx.sampData.terapiDiRs;
    const oldTindakan = tx.sampData.tindakan;
    const oldPrognosaPenyakit = tx.sampData.prognosaPenyakit;
    const oldAlasanPulang = tx.sampData.alasanPulang;
    const oldKondisiSaatPulang = tx.sampData.kondisiSaatPulang;
    const oldRencanaTindakLanjut = tx.sampData.rencanaTindakLanjut;
    tx.sampData.noRekMedis = tx.newNoRekMedis;
    tx.sampData.pasien = tx.newPasien;
    tx.sampData.dokter = tx.newDokter;
    tx.sampData.tglMasuk = tx.newTglMasuk;
    tx.sampData.tglKeluar = tx.newTglKeluar;
    tx.sampData.alasanMasuk = tx.newAlasanMasuk;
    tx.sampData.rujukan = tx.newRujukan;
    tx.sampData.anamnesis = tx.newAnamnesis;
    tx.sampData.pemeriksaanFisik = tx.newPemeriksaanFisik;
    tx.sampData.riwayatAlergi = tx.newRiwayatAlergi;
    tx.sampData.diagnosaPrimer = tx.newDiagnosaPrimer;
    tx.sampData.diagnosaSekunder = tx.newDiagnosaSekunder;
    tx.sampData.terapiDiRs = tx.newTerapiDiRs;
    tx.sampData.tindakan = tx.newTindakan;
    tx.sampData.prognosaPenyakit = tx.newPrognosaPenyakit;
    tx.sampData.alasanPulang = tx.newAlasanPulang;
    tx.sampData.kondisiSaatPulang = tx.newKondisiSaatPulang;
    tx.sampData.rencanaTindakLanjut = tx.newRencanaTindakLanjut;

    const assetRegistry = await getAssetRegistry('org.hospital.record.DataMedis');
    await assetRegistry.update(tx.sampData);

    let event = getFactory().newEvent('org.hospital.record', 'UpdateMedisData');
    event.sampData = tx.sampData;
    event.oldNoRekMedis = oldNoRekMedis;
    event.oldPasien = oldPasien;
    event.oldDokter = oldDokter;
    event.oldTglMasuk = oldTglMasuk;
    event.oldTglKeluar = oldTglKeluar;
    event.oldAlasanMasuk = oldAlasanMasuk;
    event.oldRujukan = oldRujukan;
    event.oldAnamnesis = oldAnamnesis;
    event.oldPemeriksaanFisik = oldPemeriksaanFisik;
    event.oldRiwayatAlergi = oldRiwayatAlergi;
    event.oldDiagnosaPrimer = oldDiagnosaPrimer;
    event.oldDiagnosaSekunder = oldDiagnosaSekunder;
    event.oldTerapiDiRs = oldTerapiDiRs;
    event.oldTindakan = oldTindakan;
    event.oldPrognosaPenyakit = oldPrognosaPenyakit;
    event.oldAlasanPulang = oldAlasanPulang;
    event.oldKondisiSaatPulang = oldKondisiSaatPulang;
    event.oldRencanaTindakLanjut = oldRencanaTindakLanjut;

    event.newNoRekMedis = tx.newNoRekMedis;
    event.newPasien = tx.newPasien;
    event.newDokter = tx.newDokter;
    event.newTglMasuk = tx.newTglMasuk;
    event.newTglKeluar = tx.newTglKeluar;
    event.newAlasanMasuk = tx.newAlasanMasuk;
    event.newRujukan = tx.newRujukan;
    event.newAnamnesis = tx.newAnamnesis;
    event.newPemeriksaanFisik = tx.newPemeriksaanFisik;
    event.newRiwayatAlergi = tx.newRiwayatAlergi;
    event.newDiagnosaPrimer = tx.newDiagnosaPrimer;
    event.newDiagnosaSekunder = tx.newDiagnosaSekunder;
    event.newTerapiDiRs = tx.newTerapiDiRs;
    event.newTindakan = tx.newTindakan;
    event.newPrognosaPenyakit = tx.newPrognosaPenyakit;
    event.newAlasanPulang = tx.newAlasanPulang;
    event.newKondisiSaatPulang = tx.newKondisiSaatPulang;
    event.newRencanaTindakLanjut = tx.newRencanaTindakLanjut;

    emit(event);

    //return getAssetRegistry('org.hospital.record.DataMedis').then(function (assetRegistry) {
    //    return assetRegistry.update(tx.sampData);
    //})
    //.catch(function (error) {
    //    console.error(error);
    //});
}

/**
 * Handle a transaction that returns a string.
 * @param {org.hospital.record.UpdateDataPasien} tx
 * @transaction
 */
async function UpdateDataPasien(tx) {
    const oldNik = tx.sampData.nik;
    const oldNamaLengkap = tx.sampData.namaLengkap;
    const oldTempatTglLahir = tx.sampData.tempatTglLahir;
    const oldJenisKelamin = tx.sampData.jenisKelamin;
    const oldUmur = tx.sampData.umur;
    const oldAlamat = tx.sampData.alamat;
    const oldStatusPernikahan = tx.sampData.statusPernikahan;

    tx.sampData.nik = tx.newNik;
    tx.sampData.namaLengkap = tx.newNamaLengkap;
    tx.sampData.tempatTglLahir = tx.newTempatTglLahir;
    tx.sampData.jenisKelamin = tx.newJenisKelamin;
    tx.sampData.umur = tx.newUmur;
    tx.sampData.alamat = tx.newAlamat;
    tx.sampData.statusPernikahan = tx.newStatusPernikahan;

    const assetRegistry = await getAssetRegistry('org.hospital.record.Pasien');
    await assetRegistry.update(tx.sampData);

    let event = getFactory().newEvent('org.hospital.record', 'UpdatePasienData');
    event.sampData = tx.sampData;
    event.oldNik = oldNik;
    event.oldNamaLengkap = oldNamaLengkap;
    event.oldTempatTglLahir = oldTempatTglLahir;
    event.oldJenisKelamin = oldJenisKelamin;
    event.oldUmur = oldUmur;
    event.oldAlamat = oldAlamat;
    event.oldStatusPernikahan = oldStatusPernikahan;

    event.newNik = tx.newNik;
    event.newNamaLengkap = tx.newNamaLengkap;
    event.newTempatTglLahir = tx.newTempatTglLahir;
    event.newJenisKelamin = tx.newJenisKelamin;
    event.newUmur = tx.newUmur;
    event.newAlamat = tx.newAlamat;
    event.newStatusPernikahan = tx.newStatusPernikahan;

    emit(event);


/**    return getAssetRegistry('org.hospital.record.Pasien').then(function (assetRegistry) {
        return assetRegistry.update(tx.sampData);
    })
    .catch(function (error) {
        console.error(error);
    });
*/
}



/**
 * Handle a transaction that returns a string.
 * @param {org.hospital.record.TambahDataMedis} transaction
 * @transaction
 */
async function TambahDataMedis(transaction) {

  const factory = getFactory();
  let newAsset = factory.newResource('org.hospital.record', 'DataMedis', transaction.idRekMedis);
  newAsset.idRekMedis = transaction.idRekMedis;
  newAsset.noRekMedis = transaction.noRekMedis;
  newAsset.pasien = transaction.pasien;
  newAsset.dokter = transaction.dokter;
  newAsset.tglMasuk = transaction.tglMasuk;
  newAsset.tglKeluar = transaction.tglKeluar;
  newAsset.alasanMasuk = transaction.alasanMasuk;
  newAsset.rujukan = transaction.rujukan;
  newAsset.anamnesis = transaction.anamnesis;
  newAsset.pemeriksaanFisik = transaction.pemeriksaanFisik;
  newAsset.riwayatAlergi = transaction.riwayatAlergi;
  newAsset.diagnosaPrimer = transaction.diagnosaPrimer;
  newAsset.diagnosaSekunder = transaction.diagnosaSekunder;
  newAsset.terapiDiRs = transaction.terapiDiRs;
  newAsset.tindakan = transaction.tindakan;
  newAsset.prognosaPenyakit = transaction.prognosaPenyakit;
  newAsset.alasanPulang = transaction.alasanPulang;
  newAsset.kondisiSaatPulang = transaction.kondisiSaatPulang;
  newAsset.rencanaTindakLanjut = transaction.rencanaTindakLanjut;

  const assetRegistry = await getAssetRegistry('org.hospital.record.DataMedis');
  await assetRegistry.add(newAsset);

  let event = getFactory().newEvent('org.hospital.record', 'PostMedisData');
  event.idRekMedis = transaction.idRekMedis;
  event.noRekMedis = transaction.noRekMedis;
  event.pasien = transaction.pasien;
  event.dokter = transaction.dokter;
  event.tglMasuk = transaction.tglMasuk;
  event.tglKeluar = transaction.tglKeluar;
  event.alasanMasuk = transaction.rujukan;
  event.rujukan = transaction.rujukan;
  event.anamnesis = transaction.anamnesis;
  event.pemeriksaanFisik = transaction.pemeriksaanFisik;
  event.riwayatAlergi = transaction.riwayatAlergi;
  event.diagnosaPrimer = transaction.diagnosaPrimer;
  event.diagnosaSekunder = transaction.diagnosaSekunder;
  event.terapiDiRs = transaction.terapiDiRs;
  event.tindakan = transaction.tindakan;
  event.prognosaPenyakit = transaction.prognosaPenyakit;
  event.alasanPulang = transaction.alasanPulang;
  event.kondisiSaatPulang = transaction.kondisiSaatPulang;
  event.rencanaTindakLanjut = transaction.rencanaTindakLanjut;

  emit(event);
/**
  return getAssetRegistry('org.hospital.record.DataMedis').then(function (assetRegistry) {
    return assetRegistry.add(newAsset);

  })
  .catch(function (error) {
    console.error(error);
  });
*/
}

/**
 * Handle a transaction that returns a string.
 * @param {org.hospital.record.TambahDataPasien} transaction
 * @transaction
 */
async function TambahDataPasien(transaction) {

  const factory = getFactory();
  let newAsset = factory.newResource('org.hospital.record', 'Pasien', transaction.idPasien);
  newAsset.nik = transaction.nik;
  newAsset.namaLengkap = transaction.namaLengkap;
  newAsset.tempatTglLahir = transaction.tempatTglLahir;
  newAsset.jenisKelamin = transaction.jenisKelamin;
  newAsset.umur = transaction.umur;
  newAsset.alamat = transaction.alamat;
  newAsset.statusPernikahan = transaction.statusPernikahan;

  const assetRegistry = await getAssetRegistry('org.hospital.record.Pasien');
  await assetRegistry.add(newAsset);

  let event = getFactory().newEvent('org.hospital.record', 'PostPasienData');

  event.idPasien = transaction.idPasien;
  event.nik = transaction.nik;
  event.namaLengkap = transaction.nik;
  event.tempatTglLahir = transaction.tempatTglLahir;
  event.jenisKelamin = transaction.jenisKelamin;
  event.umur = transaction.umur;
  event.alamat = transaction.alamat;
  event.statusPernikahan = transaction.statusPernikahan;

  emit(event);
}

