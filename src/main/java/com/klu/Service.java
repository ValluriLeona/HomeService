package com.klu;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

@org.springframework.stereotype.Service
public class Service {

    @Autowired
    UserRepo repo1;

    @Autowired
    PlumRepo plumRepo;

    @Autowired
    CleaningRepo cleaningRepo;

    @Autowired
    CarpenterRepo carpenterRepo;

    @Autowired
    pestControlRepo pestControlRepo;  // PestControl repository

    @Autowired
    BeautyProductRepo beautyProductRepo; // BeautyProduct repository

    @Autowired
    private MechanicalRepairRepo mechanicalRepairRepo;

    @Autowired
    private PackersMoversRepo packersMoversRepo;

    @Autowired
    private ApplianceRepairRepo applianceRepairRepo;

    // ----------------- User Methods -----------------
    public String insertData(User user) {
        repo1.save(user);
        return "Inserted Successfully";
    }

    public User loginCheck(User user) {
        User user2 = repo1.findByEmail(user.getEmail());
        if (user2 == null) {
            return user;
        } else {
            if (new Cryptography().decryptData(user2.getPassword()).equals(user.getPassword())) {
                return user2;
            } else {
                return user;
            }
        }
    }

    // ----------------- Plumbing Methods -----------------
    public String insertPlumbing(Plumbing plumbing) {
        plumRepo.save(plumbing);
        return "Inserted Successfully";
    }

    public List<Plumbing> retrievePlumbing() {
        return plumRepo.findAll();
    }

    public String updatePlumbing(Plumbing plumbing) {
        plumRepo.save(plumbing);
        return "Updated Plumbing Product";
    }

    public String deletePlumbing(int pid) {
        if (plumRepo.findById(pid).isPresent()) {
            plumRepo.deleteById(pid);
            return "Deleted Plumbing Product";
        } else {
            return "Plumbing Product Not Present";
        }
    }

    // ----------------- Cleaning Methods -----------------
    public String insertCleaning(Cleaning cleaning) {
        cleaningRepo.save(cleaning);
        return "Inserted Successfully";
    }

    public List<Cleaning> retrieveCleaning() {
        return cleaningRepo.findAll();
    }

    public String updateCleaning(Cleaning cleaning) {
        cleaningRepo.save(cleaning);
        return "Updated Cleaning Product";
    }

    public String deleteCleaning(int pid) {
        if (cleaningRepo.findById(pid).isPresent()) {
            cleaningRepo.deleteById(pid);
            return "Deleted Cleaning Product";
        } else {
            return "Cleaning Product Not Present";
        }
    }

    // ----------------- Carpenter Methods -----------------
    public String insertCarpenter(Carpenter carpenter) {
        carpenterRepo.save(carpenter);
        return "Inserted Successfully";
    }

    public List<Carpenter> retrieveCarpenter() {
        return carpenterRepo.findAll();
    }

    public String updateCarpenter(Carpenter carpenter) {
        carpenterRepo.save(carpenter);
        return "Updated Carpenter Product";
    }

    public String deleteCarpenter(int pid) {
        if (carpenterRepo.findById(pid).isPresent()) {
            carpenterRepo.deleteById(pid);
            return "Deleted Carpenter Product";
        } else {
            return "Carpenter Product Not Present";
        }
    }

    // ----------------- Pest Control Methods -----------------
    public String insertPestControl(PestControl pestControl) {
        pestControlRepo.save(pestControl);
        return "Inserted PestControl Product Successfully";
    }

    public List<PestControl> retrievePestControl() {
        return pestControlRepo.findAll();
    }

    public String updatePestControl(PestControl pestControl) {
        pestControlRepo.save(pestControl);
        return "PestControl Product Updated Successfully";
    }

    public String deletePestControl(int pid) {
        if (pestControlRepo.findById(pid).isPresent()) {
            pestControlRepo.deleteById(pid);
            return "Deleted PestControl Product Successfully";
        } else {
            return "PestControl Product Not Present";
        }
    }

    // ----------------- Beauty Product Methods -----------------
    public String insertBeautyProduct(BeautyProduct beautyProduct) {
        beautyProductRepo.save(beautyProduct);
        return "Inserted Beauty Product Successfully";
    }

    public List<BeautyProduct> retrieveBeautyProducts() {
        return beautyProductRepo.findAll();
    }

    public String updateBeautyProduct(BeautyProduct beautyProduct) {
        beautyProductRepo.save(beautyProduct);
        return "Beauty Product Updated Successfully";
    }

    public String deleteBeautyProduct(int pid) {
        if (beautyProductRepo.findById(pid).isPresent()) {
            beautyProductRepo.deleteById(pid);
            return "Deleted Beauty Product Successfully";
        } else {
            return "Beauty Product Not Present";
        }
    }

    // ----------------- Mechanical Repair Methods -----------------
    public String insertMechanicalRepair(MechanicalRepair mechanicalRepair) {
        mechanicalRepairRepo.save(mechanicalRepair);
        return "Mechanical Repair service added successfully!";
    }

    public List<MechanicalRepair> retrieveMechanicalRepair() {
        return mechanicalRepairRepo.findAll();
    }

    public String updateMechanicalRepair(MechanicalRepair mechanicalRepair) {
        mechanicalRepairRepo.save(mechanicalRepair);
        return "Mechanical Repair service updated successfully!";
    }

    public String deleteMechanicalRepair(int id) {
        mechanicalRepairRepo.deleteById(id);
        return "Mechanical Repair service deleted successfully!";
    }

    // ----------------- Packers & Movers Methods -----------------
    public String insertPackersMovers(PackersMovers packersMovers) {
        packersMoversRepo.save(packersMovers);
        return "Packers & Movers service added successfully!";
    }

    public List<PackersMovers> retrievePackersMovers() {
        return packersMoversRepo.findAll();
    }

    public String updatePackersMovers(PackersMovers packersMovers) {
        packersMoversRepo.save(packersMovers);
        return "Packers & Movers service updated successfully!";
    }

    public String deletePackersMovers(int id) {
        packersMoversRepo.deleteById(id);
        return "Packers & Movers service deleted successfully!";
    }

    // ----------------- Appliance Repair Methods -----------------
    public String insertApplianceRepair(ApplianceRepair applianceRepair) {
        applianceRepairRepo.save(applianceRepair);
        return "Appliance Repair service added successfully!";
    }

    public List<ApplianceRepair> retrieveApplianceRepair() {
        return applianceRepairRepo.findAll();
    }

    public String updateApplianceRepair(ApplianceRepair applianceRepair) {
        applianceRepairRepo.save(applianceRepair);
        return "Appliance Repair service updated successfully!";
    }

    public String deleteApplianceRepair(int id) {
        applianceRepairRepo.deleteById(id);
        return "Appliance Repair service deleted successfully!";
    }
}
