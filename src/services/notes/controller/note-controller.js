import response from '../../../utils/response.js';
import NoteRepository from '../../../repositories/note-repositories.js';
import { InvariantError, NotFoundError } from '../../../exceptions/index.js';

// Inisialisasi instance repository
const noteRepository = new NoteRepository();

export const createNote = async (req, res, next) => {
  try {
    const { title, tags, body } = req.body;
    const note = await noteRepository.createNote({ title, tags, body });

    if (!note) {
      return next(new InvariantError('Catatan gagal ditambahkan'));
    }

    return response(res, 201, 'Catatan berhasil ditambahkan', { noteId: note.id });
  } catch (error) {
    return next(error);
  }
};

export const getAllNotes = async (req, res, next) => {
  try {
    const notes = await noteRepository.getNotes();
    return response(res, 200, 'Catatan berhasil ditampilkan', { notes });
  } catch (error) {
    return next(error);
  }
};

export const getNoteById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const note = await noteRepository.getNoteById(id);

    if (!note) {
      return next(new NotFoundError('Catatan tidak ditemukan'));
    }

    return response(res, 200, 'Catatan berhasil ditampilkan', { note });
  } catch (error) {
    return next(error);
  }
};

export const editNoteById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, tags, body } = req.validated || req.body;

    const note = await noteRepository.editNote({ id, title, tags, body });

    if (!note) {
      return next(new NotFoundError('Gagal memperbarui catatan. Id tidak ditemukan'));
    }

    return response(res, 200, 'Catatan berhasil diperbarui', note);
  } catch (error) {
    return next(error);
  }
};

export const deleteNoteById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const note = await noteRepository.deleteNote(id);

    if (!note) {
      return next(new NotFoundError('Catatan gagal dihapus. Id tidak ditemukan'));
    }

    return response(res, 200, 'Catatan berhasil dihapus', note);
  } catch (error) {
    return next(error);
  }
};