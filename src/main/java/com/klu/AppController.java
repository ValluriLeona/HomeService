package com.klu;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:5173") // Restrict CORS to the frontend
public class AppController {

    @Autowired
    Service obj;

    Cryptography cryp = new Cryptography();

    @GetMapping("/home")
    public String fun1() {
        return "Welcome to the backend!";
    }

    // User login check
    @PostMapping("/check")
    public User fun9(@RequestBody User user) {
        return obj.loginCheck(user);
    }

    // Create User
    @PostMapping("/user")
    public String fun2(@RequestBody User user) {
        user.setPassword(cryp.encryptData(user.getPassword())); // Encrypt the password
        return obj.insertData(user);
    }

    // ----------------- Plumbing -----------------
    @PostMapping("/product/plumbing")
    public String addPlumbing(@RequestBody Plumbing plumbing) {
        return obj.insertPlumbing(plumbing);
    }

    @GetMapping("/plumbing")
    public List<Plumbing> getPlumbing() {
        return obj.retrievePlumbing();
    }

    @PutMapping("/product/plumbing")
    public String updatePlumbing(@RequestBody Plumbing plumbing) {
        return obj.updatePlumbing(plumbing);
    }

    @DeleteMapping("/product/plumbing")
    public String deletePlumbing(@RequestParam("pid") int pid) {
        return obj.deletePlumbing(pid);
    }

    // ----------------- Cleaning -----------------
    @PostMapping("/product/cleaning")
    public String addCleaning(@RequestBody Cleaning cleaning) {
        return obj.insertCleaning(cleaning);
    }

    @GetMapping("/cleaning")
    public List<Cleaning> getCleaning() {
        return obj.retrieveCleaning();
    }

    @PutMapping("/product/cleaning")
    public String updateCleaning(@RequestBody Cleaning cleaning) {
        return obj.updateCleaning(cleaning);
    }

    @DeleteMapping("/product/cleaning")
    public String deleteCleaning(@RequestParam("pid") int pid) {
        return obj.deleteCleaning(pid);
    }

    // ----------------- Carpenter -----------------
    @PostMapping("/product/carpenter")
    public String addCarpenter(@RequestBody Carpenter carpenter) {
        return obj.insertCarpenter(carpenter);
    }

    @GetMapping("/carpenter")
    public List<Carpenter> getCarpenter() {
        return obj.retrieveCarpenter();
    }

    @PutMapping("/product/carpenter")
    public String updateCarpenter(@RequestBody Carpenter carpenter) {
        return obj.updateCarpenter(carpenter);
    }

    @DeleteMapping("/product/carpenter")
    public String deleteCarpenter(@RequestParam("pid") int pid) {
        return obj.deleteCarpenter(pid);
    }

    // ----------------- Pest Control -----------------
    @PostMapping("/product/pestcontrol")
    public String addPestControl(@RequestBody PestControl pestControl) {
        return obj.insertPestControl(pestControl);
    }

    @GetMapping("/pestcontrol")
    public List<PestControl> getPestControl() {
        return obj.retrievePestControl();
    }

    @PutMapping("/product/pestcontrol")
    public String updatePestControl(@RequestBody PestControl pestControl) {
        return obj.updatePestControl(pestControl);
    }

    @DeleteMapping("/product/pestcontrol")
    public String deletePestControl(@RequestParam("pid") int pid) {
        return obj.deletePestControl(pid);
    }

    // ----------------- Beauty Product -----------------
    @PostMapping("/product/beauty")
    public String addBeautyProduct(@RequestBody BeautyProduct beautyProduct) {
        return obj.insertBeautyProduct(beautyProduct);
    }

    @GetMapping("/beauty")
    public List<BeautyProduct> getBeautyProduct() {
        return obj.retrieveBeautyProducts();
    }

    @PutMapping("/product/beauty")
    public String updateBeautyProduct(@RequestBody BeautyProduct beautyProduct) {
        return obj.updateBeautyProduct(beautyProduct);
    }

    @DeleteMapping("/product/beauty")
    public String deleteBeautyProduct(@RequestParam("pid") int pid) {
        return obj.deleteBeautyProduct(pid);
    }

    // ----------------- Appliance Repair -----------------
    @PostMapping("/product/appliance")
    public String addAppliance(@RequestBody ApplianceRepair appliance) {
        return obj.insertApplianceRepair(appliance);
    }

    @GetMapping("/appliance")
    public List<ApplianceRepair> getAppliance() {
        return obj.retrieveApplianceRepair();
    }

    @PutMapping("/product/appliance")
    public String updateAppliance(@RequestBody ApplianceRepair appliance) {
        return obj.updateApplianceRepair(appliance);
    }

    @DeleteMapping("/product/appliance")
    public String deleteAppliance(@RequestParam("pid") int pid) {
        return obj.deleteApplianceRepair(pid);
    }

    // ----------------- Packers & Movers -----------------
    @PostMapping("/product/packers")
    public String addPackers(@RequestBody PackersMovers packers) {
        return obj.insertPackersMovers(packers);
    }

    @GetMapping("/packers")
    public List<PackersMovers> getPackers() {
        return obj.retrievePackersMovers();
    }

    @PutMapping("/product/packers")
    public String updatePackers(@RequestBody PackersMovers packers) {
        return obj.updatePackersMovers(packers);
    }

    @DeleteMapping("/product/packers")
    public String deletePackers(@RequestParam("pid") int pid) {
        return obj.deletePackersMovers(pid);
    }

 //


}
